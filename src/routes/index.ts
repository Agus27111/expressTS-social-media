import { Router } from "express";
import UserRoutes from "./UserRoutes";

const router = Router();

router.use("/api/v1/users", UserRoutes);


export default router;