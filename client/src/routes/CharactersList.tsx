import CharacterListItem from "../components/CharacterListItem";
import { motion } from "motion/react";
import api from "../services/api";
import { useEffect, useState } from "react";

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

const CharactersList = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const getCharacters = async () => {
    try {
      const response = await api.get<Character[]>("/characters");
      setCharacters(response.data);
    } catch (error) {
      console.error("Error fetching characters: ", error);
    }
  };
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-8 px-6 gap-9">
      <motion.div
        className="font-bold text-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        CHARACTERS
      </motion.div>
      <div className="grid md:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr] gap-6 wrap">
        {characters.map((character) => (
          <CharacterListItem
            key={character.id}
            name={character.name}
            profile_image_url={character.profile_image_url}
          />
        ))}
      </div>
    </div>
  );
};

export default CharactersList;
