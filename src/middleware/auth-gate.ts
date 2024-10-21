import type { Request, Response, NextFunction } from "express";

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

  next();
};