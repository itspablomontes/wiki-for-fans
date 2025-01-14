import pool from "../db";

export interface House {
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

export const createHouse = async (
  house: Omit<House, "id" | "created_at" | "updated_at">
): Promise<House> => {
  const query = ` 
  INSERT INTO houses (
  name,
  coat_of_arms,
  words,
  seat,
  region,
  head,
  notable_characters,
  description,
  house_banner_url) 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;`;

  try {
    const values = [
      house.name,
      house.coat_of_arms,
      house.words,
      house.seat,
      house.region,
      house.head,
      house.notable_characters,
      house.description,
      house.house_banner_url,
    ];

    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error({ message: "Database error: ", error });
    throw error;
  }
};
