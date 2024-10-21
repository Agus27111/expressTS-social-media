import { Router } from "express";
import UserRoutes from "./UserRoutes";
import AuthRoutes from "./AuthRoutes";

const router = Router();

router.use("/api/v1/users", UserRoutes);
router.use("/api/v1/auth", AuthRoutes);

export default router;
