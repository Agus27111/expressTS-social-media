import { IUser } from "../schemas/User";
import { Types } from "mongoose";

export interface JwtPayload extends Omit<IUser, "password"> {
  id: Types.ObjectId;
}
