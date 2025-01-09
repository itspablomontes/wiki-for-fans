import { Request, Response } from "express";
import {
  getAllCharacters,
  createCharacter,
  Character,
} from "../models/charactersModel";

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

export const addCharacter = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const characterData: Omit<Character, "id" | "created_at" | "updated_at"> =
      req.body;

    if (
      !characterData.name ||
      !characterData.born ||
      !characterData.profile_image_url
    ) {
      return res
        .status(400)
        .json({ message: "Name, birth and profile image url are required" });
    }

    const newCharacter = await createCharacter(characterData);
    res.status(201).json(newCharacter);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating character",
    });
  }
};
