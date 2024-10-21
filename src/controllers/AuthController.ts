import { TypedRequest, TypedResponse } from "src/utils/TypedController";

interface IUser {
  name: string;
  email: string;
  password: string;
}

export const register = (
  req: TypedRequest<{}, IUser>,
  res: TypedResponse<{ message: string; data: IUser }>,
) => {
  const { name, email, password } = req.body;
  res
    .status(201)
    .json({ message: "User created", data: { name, email, password } });
};
