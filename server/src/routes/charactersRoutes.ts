import { Router } from "express";
import {
  getCharacters,
  addCharacter,
  removeCharacterById,
} from "../controllers/charactersController";

const charactersRoutes = Router();

charactersRoutes.get("/", getCharacters);
charactersRoutes.post("/add-character", addCharacter);
charactersRoutes.delete("/remove-character", removeCharacterById);

export default charactersRoutes;
