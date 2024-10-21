import {
  TypedRequest,
  TypedResponse,
  TypedNextFunction,
} from "../utils/TypedController";
import bcrypt from "bcrypt";
import { IUser } from "../schemas/User";
import { createUser } from "../services/UserService";

export const register = async (
  req: TypedRequest<{}, IUser>,
  res: TypedResponse<{ message: string; data: IUser | null; error?: string }>,
  next: TypedNextFunction,
) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
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
    const errorMessage = (error as Error).message || "Internal server error";

    res.status(500).json({
      message: "Error creating user",
      data: null,
      error: errorMessage,
    });
  }
};
