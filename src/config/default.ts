import dotenv from "dotenv";

dotenv.config();

export default {
  mongoUrl: process.env.MONGODB_URL as string,
  jwtSecret: process.env.JWT_SECRET as string,
  accessTokenExpiresIn: process.env.ACCESS_TOKEN_EXPIRE
    ? parseInt(process.env.ACCESS_TOKEN_EXPIRE)
    : 30,
  refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRE
    ? parseInt(process.env.REFRESH_TOKEN_EXPIRE)
    : 60,
  port: process.env.PORT,
};
