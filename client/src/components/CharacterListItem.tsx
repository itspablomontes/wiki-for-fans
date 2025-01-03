import { Link } from "react-router-dom";
import { motion } from "motion/react";
const CharacterListItem = () => {
  return (
    <Link
      to="/character"
      className="flex flex-col justify-center items-center gap-3 "
    >
      <motion.div
        className="p-1 hover:bg-gradient-to-r from-red-600  to-orange-700 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <img
          src="src/assets/jon-small-icon.webp"
          alt="jon snow"
          className="max-w-64 rounded-full"
        />
      </motion.div>

      <motion.div
        className="font-custom text-2xl "
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        Jon Snow
      </motion.div>
    </Link>
  );
};

export default CharacterListItem;
