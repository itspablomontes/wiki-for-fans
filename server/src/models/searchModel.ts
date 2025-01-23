import pool from "../db";

export const searchAll = async (query: string) => {
  try {
    const charactersResult = await pool.query(
      `SELECT id, name, born, died, house, affiliations, phrase, 
            description, profile_image_url
            FROM characters
            WHERE name ILIKE $1 or house ILIKE $1`,
      [`%${query}%`]
    );
    const housesResult = await pool.query(
      `SELECT id, name, coat_of_arms, words, seat, region, head, notable_characters,
       description, house_banner_url 
      FROM houses
      WHERE name ILIKE $1`,
      [`%${query}%`]
    );

    const characters = charactersResult.rows.map((character) => ({
      ...character,
      type: "character",
    }));

    const houses = housesResult.rows.map((house) => ({
      ...house,
      type: "house",
    }));

    return [...characters, ...houses];
  } catch (error) {
    console.error("Database error: ", error);
    throw error;
  }
};
