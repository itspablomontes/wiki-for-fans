import { Router } from "express";
import { getCharacters } from "controllers/charactersController";

const charactersRoutes = Router();

charactersRoutes.get("/", getCharacters);
export default charactersRoutes;
