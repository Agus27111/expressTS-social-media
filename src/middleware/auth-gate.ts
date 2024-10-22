import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config/default";
import type { JwtPayload } from "../@types/JwtPayload";
import redisClient from "../utils/connectRedis";

export const authGate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const decoded = jwt.verify(accessToken, config.jwtSecret) as JwtPayload;

  const session = await redisClient.get(decoded.id.toString());
  if (!session) {
    return res.status(401).json({
      message: "session not found, please login again",
    });
  }
  req.user = decoded;
  next();
};
