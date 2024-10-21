import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import routes from "./routes";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import _default from "./config/default";

dotenv.config();

const app: Express = express();
const port: string = process.env.PORT ?? "3000";

app.use(cors());
app.use(cookieParser() as express.RequestHandler);
app.use(helmet());
app.use(express.json());
app.use(routes);

mongoose.connect(_default.mongoUrl);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
