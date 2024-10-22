import {
  TypedRequest,
  TypedResponse,
  TypedNextFunction,
} from "../utils/TypedController";
import type { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { IUser } from "../schemas/User";
import { createUser, findByEmail } from "../services/UserService";
import type { JwtPayload } from "../@types/JwtPayload";
import jwt from "jsonwebtoken";
import config from "../config/default";
import redisClient from "../utils/connectRedis";

const jwtSign = (payload: JwtPayload, expiresIn: string) => {
  const secret = config.jwtSecret;
  const token = jwt.sign(payload, secret, { expiresIn });
  return token;
};

export const register = async (
  req: TypedRequest<{}, IUser>,
  res: TypedResponse<{
    message: string;
    data: IUser | null;
    error?: string;
  }>,
  next: TypedNextFunction,
): Promise<void> => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res.status(400).json({
        message: "All fields are required",
        data: null,
        error: "Missing fields",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    await createUser({ username, email, password: hash });

    res.status(201).json({
      message: "User created",
      data: { username, email, password: hash },
    });
  } catch (error) {
    next(error);
    res.status(500).json({
      message: "Error creating user",
      data: null,
      error: (error as Error).message || "Internal server error",
    });
  }
};

export const login = async (
  req: TypedRequest<{}, Omit<IUser, "username">>,
  res: TypedResponse<{
    message: string;
    data: Omit<IUser, "password"> | null;
    error?: string;
  }>,
  next: TypedNextFunction,
) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        message: "All fields are required",
        data: null,
        error: "Missing fields",
      });
    }

    const user = await findByEmail(email);
    if (!user) {
      return res.status(404).json({
        message: "Email not found",
        data: null,
        error: "Email not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid password",
        data: null,
        error: "Invalid password",
      });
    }
    const payload: JwtPayload = {
      id: user.id,
      username: user.username,
      email: user.email,
    };

    redisClient.set(`${user.id}`, JSON.stringify(payload), {
      EX: config.redisExpiresIn * 60, //1 minggu
    });

    const accesToken = jwtSign(payload, `${config.accessTokenExpiresIn}m`);

    const refreshToken = jwtSign(payload, `${config.refreshTokenExpiresIn}m`);

    res
      .cookie("accessToken", accesToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        expires: new Date(Date.now() + 1000 * 60 * config.accessTokenExpiresIn),
        sameSite: "strict",
      })
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        expires: new Date(
          Date.now() + 1000 * 60 * config.refreshTokenExpiresIn,
        ),
        sameSite: "strict",
      })
      .status(200)
      .json({
        message: "User logged in",
        data: {
          username: user.username,
          email: user.email,
        },
      });
  } catch (error) {
    next(error);
    const errorMessage = (error as Error).message || "Internal server error";

    res.status(500).json({
      message: "Error creating user",
      data: null,
      error: errorMessage,
    });
  }
};

export const refreshAccessToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({
        message: "Could not refresh access token",
        data: null,
      });
    }

    const decoded = jwt.verify(refreshToken, config.jwtSecret) as JwtPayload;
    if (!decoded) {
      return res.status(401).json({
        message: "your refresh token invalid",
        data: null,
      });
    }

    const session = await redisClient.get(decoded.id.toString());
    if (!session) {
      return res.status(401).json({
        message: "session not found, please login again",
        data: null,
      });
    }
    const newAccessToken = jwt.sign(decoded, config.jwtSecret);

    res.cookie("accessToken", newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: new Date(Date.now() + 1000 * 60 * config.accessTokenExpiresIn),
      sameSite: "strict",
    });
    res.status(200).json({
      message: "Access token refreshed",
      data: {
        accessToken: newAccessToken,
      },
    });
  } catch (error) {
    next(error);
    res.status(500).json({
      message: "Error creating user",
      data: null,
      error: (error as Error).message || "Internal server error",
    });
  }
};

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = req.user;
    await redisClient.del(user?.id.toString() as string);

    return res
      .cookie("accessToken", "", { maxAge: -1 })
      .cookie("refreshToken", "", { maxAge: -1 })
      .status(200)
      .json({
        message: "User logged out",
        data: null,
      });
  } catch (error) {
    next(error);
    res.status(500).json({
      message: "Error logout user",
      data: null,
      error: (error as Error).message || "Internal server error",
    });
  }
};
