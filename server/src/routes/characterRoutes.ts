import { Router } from "express";
import { getAllCharacters } from "../models/CharactersModel";

const characterRoutes = Router();

characterRoutes.get("/characters-list", async (req, res) => {
  const characters = await getAllCharacters();
  res.json(characters);
});

export default characterRoutes;
