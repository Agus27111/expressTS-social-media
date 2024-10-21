import { IUser, IUserDocument, User } from "../schemas/User";

export const createUser = async ({
  username,
  email,
  password,
}: IUser): Promise<IUserDocument> => {
  const user = new User({ username, email, password });
  await user.save();
  return user;
};
