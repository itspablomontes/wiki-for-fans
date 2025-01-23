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
housesRoutes.get("/find/:id", findHouseById);
housesRoutes.post("/add", addHouse);
housesRoutes.delete("/remove/:id", removeHouse);
housesRoutes.put("/update/:id", updateHouse);
