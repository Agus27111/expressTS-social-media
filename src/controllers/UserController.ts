import { Request, Response, NextFunction } from "express";

type User = {
  name: string;
  email: string;
};

export const getUsers = (req: Request, res: Response, next: NextFunction) => {
  try {
    const users: Array<User> = [
      {
        name: "John Doe",
        email: "2V7p8@example.com",
      },
      {
        name: "Jane Doe",
        email: "2V7p8@example.com",
      },
    ];
    res.status(200).json({ message: "User found", data: users });
  } catch (error) {
    next(error); // Panggil next jika terjadi kesalahan
  }
}







