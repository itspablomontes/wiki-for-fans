import pool from "../db";

export const getAllCharacters = async () => {
  const { rows } = await pool.query("SELECT * FROM characters");
  return rows;
};
