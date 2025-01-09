import { Request, Response } from "express";
import {
  getAllCharacters,
  createCharacter,
  deleteCharacterById,
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

export const removeCharacterById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.body;

  if (!id || isNaN(Number(id)) || Number(id) <= 0) {
    res.status(400).json({ message: "Invalid or missing id" });
    return;
  }
  try {
    const removedCharacter = await deleteCharacterById(Number(id));

    if (removedCharacter.rowCount === 0) {
      res.status(404).json({ message: "Character Not Found" });
      return;
    }

    res.status(200).json({
      message: "Character Successfully Deleted",
      data: removedCharacter,
    });
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
};
