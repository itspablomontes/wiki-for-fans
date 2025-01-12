import { Request, Response } from "express";
import {
  getAllCharacters,
  createCharacter,
  deleteCharacterById,
  Character,
  getCharacterById,
  updateCharacter,
} from "../models/charactersModel";

export const getCharacters = async (req: Request, res: Response) => {
  try {
    const characters = await getAllCharacters();
    res.status(200).json(characters);
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
};

export const findCharacterById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (!id || isNaN(id) || id <= 0) {
    res.status(400).json({ message: "Invalid or missing id" });
    return;
  }

  try {
    const targetCharacter = await getCharacterById(Number(id));
    if (!targetCharacter) {
      res.status(404).json({ message: "Character Not Found" });
      return;
    }
    res
      .status(200)
      .json({ message: "Character Found!", data: targetCharacter });
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
};

export const addCharacter = async (req: Request, res: Response) => {
  try {
    const characterData: Omit<Character, "id" | "created_at" | "updated_at"> =
      req.body;

    if (
      !characterData.name ||
      !characterData.born ||
      !characterData.profile_image_url
    ) {
      res
        .status(400)
        .json({ message: "Name, birth and profile image url are required" });
      return;
    }

    const newCharacter = await createCharacter(characterData);
    res.status(201).json(newCharacter);
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
};

export const removeCharacterById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (!id || isNaN(id) || id <= 0) {
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

export const updateCharacterById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updates = req.body;

  if (!id || isNaN(id) || id <= 0) {
    res.status(400).json({ message: "Invalid or missing id" });
    return;
  }
  if (Object.keys(updates).length === 0) {
    res.status(400).json({ message: "No updates provided" });
    return;
  }
  try {
    const updatedCharacter = await updateCharacter(id, updates);
    if (!updatedCharacter) {
      res.status(404).json({ message: "Character Not Found" });
      return;
    }
    res.status(200).json({
      message: "Character Updated Successfully",
      data: updatedCharacter,
    });
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
};
