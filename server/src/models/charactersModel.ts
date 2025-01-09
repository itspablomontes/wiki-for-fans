import { error } from "console";
import pool from "../db";

export interface Character {
  id?: number;
  name: string;
  born: string;
  died: string;
  house: string;
  titles: string[];
  affiliations: string[];
  phrase: string;
  description: string[];
  profile_image_url: string;
  created_at: Date;
  updated_at: Date;
}

export const getAllCharacters = async () => {
  const { rows } = await pool.query("SELECT * FROM characters");
  return rows;
};

export const createCharacter = async (
  character: Omit<Character, "id" | "created_at" | "updated_at">
): Promise<Character> => {
  const query = `
      INSERT INTO characters (
      name,
      born,
      died,
      house,
      titles,
      affiliations,
      phrase,
      description,
      profile_image_url
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;
    `;

  try {
    const values = [
      character.name,
      character.born,
      character.died,
      character.house,
      character.titles,
      character.affiliations,
      character.phrase,
      character.description,
      character.profile_image_url,
    ];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }
};

export const deleteCharacterById = async (id: number) => {
  const query = ` DELETE FROM characters WHERE id=$1 RETURNING *;
  `;
  const value = id;
  try {
    const result = await pool.query(query, [value]);
    return result.rows[0];
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }
};
