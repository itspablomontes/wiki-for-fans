import { Router } from "express";
import {
  addHouse,
  findHouseById,
  getHouses,
  removeHouse,
  updateHouse,
} from "../controllers/housesController";

export const housesRoutes = Router();

housesRoutes.get("/", getHouses);
housesRoutes.get("/find-house/:id", findHouseById);
housesRoutes.post("/add-house", addHouse);
housesRoutes.delete("/remove-house/:id", removeHouse);
housesRoutes.put("/update-house/:id", updateHouse);
