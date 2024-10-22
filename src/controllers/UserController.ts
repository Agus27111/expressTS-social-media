import { Request, Response, NextFunction } from "express";

type User = {
  name: string;
  email: string;
};

export const getUsers = (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("siapa yang login saat ini?")
    console.log(req.user)
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
    next(error); 
  }
}







