import { Router } from "express";
import { register, login } from "../controllers/AuthController";
import {
  TypedRequest,
  TypedResponse,
  TypedNextFunction,
} from "../utils/TypedController";

const router = Router();

router.post("/register", register);
router.post(
  "/login",
  (req: TypedRequest, res: TypedResponse, next: TypedNextFunction) =>
    login(req, res, next),
);

export default router;
