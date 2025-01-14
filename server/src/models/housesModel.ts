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

export const getHouseById = async (id: number) => {
  const query = `SELECT * FROM houses WHERE id=$1;`;
  const value = id;
  try {
    const result = await pool.query(query, [value]);
    return result.rows[0];
  } catch (error) {
    console.error("Database error: ", error);
    throw error;
  }
};
