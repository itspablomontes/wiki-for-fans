import { Router } from "express";
import { getHouses } from "../controllers/housesController";

export const housesRoutes = Router();

housesRoutes.get("/", getHouses);
