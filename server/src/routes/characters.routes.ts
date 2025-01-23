import { Router } from "express";
import {
  getCharacters,
  addCharacter,
  removeCharacterById,
  findCharacterById,
  updateCharacterById,
} from "../controllers/charactersController";

export const charactersRoutes = Router();

charactersRoutes.get("/", getCharacters);
charactersRoutes.get("/find/:id", findCharacterById);
charactersRoutes.post("/add", addCharacter);
charactersRoutes.delete("/remove", removeCharacterById);
charactersRoutes.put("/update/:id", updateCharacterById);
