import { Router } from "express";
import UserRoutes from "./UserRoutes";
import AuthRoutes from "./AuthRoutes";
import { authGate } from "../middleware/auth-gate";
const router = Router();

router.use("/api/v1/users", authGate, UserRoutes);
router.use("/api/v1/auth", AuthRoutes);

export default router;
