import { Router } from "express";
import { getAllCharacters } from "../models/charactersModel";

const characterRoutes = Router();

characterRoutes.get("/list", async (req, res) => {
  const characters = await getAllCharacters();
  res.json(characters);
});

export default characterRoutes;
