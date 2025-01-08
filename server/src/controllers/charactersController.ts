import { Request, Response } from "express";
import { getAllCharacters } from "../models/charactersModel";

export const getCharacters = async (req: Request, res: Response) => {
  try {
    const characters = await getAllCharacters();
    res.status(200).json(characters);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};
