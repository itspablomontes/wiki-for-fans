import express from "express";
import charactersRoutes from "./routes/charactersRoutes";
const router = express.Router();

router.use("/characters", charactersRoutes);

export default router;
