import { Router } from "express";
import {
  addHouse,
  findHouseById,
  getHouses,
} from "../controllers/housesController";

export const housesRoutes = Router();

housesRoutes.get("/", getHouses);
housesRoutes.get("/find-house/:id", findHouseById);
housesRoutes.post("/add-house", addHouse);
