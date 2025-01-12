import { Router } from "express";
import {
  getCharacters,
  addCharacter,
  removeCharacterById,
  findCharacterById,
  updateCharacterById,
} from "../controllers/charactersController";

const charactersRoutes = Router();

charactersRoutes.get("/", getCharacters);
charactersRoutes.get("/find-character/:id", findCharacterById);
charactersRoutes.post("/add-character", addCharacter);
charactersRoutes.delete("/remove-character", removeCharacterById);
charactersRoutes.put("/update-character/:id", updateCharacterById);

export default charactersRoutes;
