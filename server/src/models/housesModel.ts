import pool from "../db";

export interface Houses {
  id?: number;
  name: string;
  coat_of_arms: string;
  words: string;
  seat: string;
  region: string;
  head: string;
  notable_characters: string[];
  description: string[];
  house_banner_url: string;
  created_at: Date;
  updated_at: Date;
}

export const getAllHouses = async () => {
  try {
    const query = "SELECT * FROM houses";
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    console.error("Database error: ", error);
    throw error;
  }
};
