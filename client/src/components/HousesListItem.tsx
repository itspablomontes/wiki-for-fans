import { Link } from "react-router-dom";
import { motion } from "motion/react";

const HousesListItem = () => {
  return (
    <Link
      to="/house"
      className="flex flex-col justify-center items-center gap-3 "
    >
      <motion.div
        className="p-1 hover:bg-gradient-to-r from-red-600  to-yellow-400 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <img
          src="src/assets/house-lannister.webp"
          alt="house lannister banner"
          className="max-w-64 rounded-full"
        />
      </motion.div>

      <motion.div
        className="font-custom text-2xl "
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        Lannister
      </motion.div>
    </Link>
  );
};

export default HousesListItem;
