import { Router } from "express";
import {
  getCharacters,
  addCharacter,
  removeCharacterById,
  findCharacterById,
} from "../controllers/charactersController";

const charactersRoutes = Router();

charactersRoutes.get("/", getCharacters);
charactersRoutes.get("/find-character", findCharacterById);
charactersRoutes.post("/add-character", addCharacter);
charactersRoutes.delete("/remove-character", removeCharacterById);

export default charactersRoutes;
