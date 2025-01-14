import { Router } from "express";
import { findHouseById, getHouses } from "../controllers/housesController";

export const housesRoutes = Router();

housesRoutes.get("/", getHouses);
housesRoutes.get("/find-house/:id", findHouseById);
