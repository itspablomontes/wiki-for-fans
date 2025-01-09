import { Router } from "express";
import {
  getCharacters,
  addCharacter,
} from "../controllers/charactersController";

const charactersRoutes = Router();

charactersRoutes.get("/", getCharacters);
charactersRoutes.post("/create", addCharacter);

export default charactersRoutes;
