import express from "express";
import { charactersRoutes } from "./routes/characters.routes";
import { housesRoutes } from "./routes/houses.routes";
import { searchController } from "./controllers/searchController";
const router = express.Router();

router.use("/characters", charactersRoutes);
router.use("/houses", housesRoutes);
router.get("/search/", searchController);

export default router;
