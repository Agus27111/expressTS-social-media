import dotenv from "dotenv";

dotenv.config();

export default {
  mongoUrl: process.env.MONGODB_URL as string,
  jwtSecret: process.env.JWT_SECRET as string,
  redisUrl: process.env.REDIS_URL as string,
  accessTokenExpiresIn: process.env.ACCESS_TOKEN_EXPIRE
    ? parseInt(process.env.ACCESS_TOKEN_EXPIRE)
    : 30,
  refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRE
    ? parseInt(process.env.REFRESH_TOKEN_EXPIRE)
    : 60,
  redisExpiresIn: process.env.REDIS_EXPIRES_IN
    ? parseInt(process.env.REDIS_EXPIRES_IN)
    : 10080,
  port: process.env.PORT,
};
