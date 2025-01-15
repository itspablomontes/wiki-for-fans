import express from "express";
import { charactersRoutes } from "./routes/characters.routes";
import { housesRoutes } from "./routes/houses.routes";
const router = express.Router();

router.use("/characters", charactersRoutes);
router.use("/houses", housesRoutes);

export default router;
