import { Request, Response } from "express";

import {
  createHouse,
  deleteHouseById,
  getAllHouses,
  getHouseById,
  House,
  updateHouseById,
} from "../models/housesModel";

export const getHouses = async (req: Request, res: Response) => {
  try {
    const houses = await getAllHouses();
    res.status(200).json(houses);
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
};

export const findHouseById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (!id || isNaN(id) || id <= 0) {
    res.status(400).json({ message: "Invalid or missing id" });
    return;
  }

  try {
    const targetHouse = await getHouseById(id);
    if (!targetHouse) {
      res.status(404).json({ message: "House not found" });
      return;
    }
    res.status(200).json({ message: "Character Found!", data: targetHouse });
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "An unknown error occured",
    });
  }
};

export const addHouse = async (req: Request, res: Response) => {
  try {
    const houseData: Omit<House, "id" | "created_at" | "updated_at"> = req.body;

    if (
      !houseData.name ||
      !houseData.coat_of_arms ||
      !houseData.words ||
      !houseData.seat ||
      !houseData.region ||
      !houseData.head ||
      !houseData.notable_characters ||
      !houseData.description ||
      !houseData.house_banner_url
    ) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }
    const newHouse = await createHouse(houseData);
    res.status(201).json(newHouse);
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "An unknown error ocurred",
    });
  }
};

export const removeHouse = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (!id || isNaN(id) || id <= 0) {
    res.status(400).json({ message: "Invalid or missing id" });
    return;
  }
  try {
    const removedHouse = await deleteHouseById(id);
    if (removedHouse.rowCount === 0) {
      res.status(404).json({ message: "House not found" });
      return;
    }

    res.status(200).json({
      message: "House successfully deleted",
      data: removedHouse,
    });
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown error ocurred",
    });
  }
};

export const updateHouse = async (req: Request, res: Response) => {
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
    const updatedHouse = await updateHouseById(id, updates);
    if (!updatedHouse) {
      res.status(404).json({ message: "House not found" });
      return;
    }
    res
      .status(200)
      .json({ message: "House Updated Successfully!", data: updatedHouse });
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown error occurred",
    });
  }
};
