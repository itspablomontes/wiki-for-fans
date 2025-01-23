import { Request, Response } from "express";
import { searchAll } from "../models/searchModel";

export const searchController = async (req: Request, res: Response) => {
  const query = req.query.query as string;
  if (!query) {
    res.status(400).json({ error: "Query parameter is required" });
    return;
  }
  try {
    const results = await searchAll(query);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
};
