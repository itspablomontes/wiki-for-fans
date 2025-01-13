import { Request, Response } from "express";

import { getAllHouses } from "../models/housesModel";

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
