import CharacterListItem from "../components/CharacterListItem";
import { motion } from "motion/react";

const CharactersList = () => {
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
        <CharacterListItem />
        <CharacterListItem />
        <CharacterListItem />
        <CharacterListItem />
        <CharacterListItem />
        <CharacterListItem />
        <CharacterListItem />
        <CharacterListItem />
      </div>
    </div>
  );
};

export default CharactersList;
