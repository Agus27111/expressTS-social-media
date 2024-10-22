import { createClient } from "redis";
import config from "../config/default";

const redisClient = createClient({
  url: config.redisUrl,
});

const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log("Redis connected");
  } catch (error) {
    console.log("Redis connection failed", error);
    process.exit(1);
  }
};

connectRedis();

redisClient.on("error", (error) => console.log("Redis Client Error", error));

export default redisClient;
