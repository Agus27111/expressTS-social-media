import { Router } from "express";
import {
  register,
  login,
  refreshAccessToken,
  logout,
} from "../controllers/AuthController";
import {
  TypedRequest,
  TypedResponse,
  TypedNextFunction,
} from "../utils/TypedController";
import { authGate } from "../middleware/auth-gate";

const router = Router();

router.post("/register", register);
router.post(
  "/login",
  (req: TypedRequest, res: TypedResponse, next: TypedNextFunction) =>
    login(req, res, next),
);
router.get("/refresh-token", refreshAccessToken);
router.post("/logout", authGate, logout);

export default router;
