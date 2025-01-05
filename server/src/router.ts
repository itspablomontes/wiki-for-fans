import express from "express";
import characterRoutes from "./routes/characterRoutes";
const router = express.Router();

router.use("/character", characterRoutes);

export default router;
