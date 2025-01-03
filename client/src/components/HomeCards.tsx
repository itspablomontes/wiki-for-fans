import { motion } from "motion/react";
import { Link } from "react-router-dom";

interface homeCardsProps {
  cardsRef: React.RefObject<HTMLDivElement>;
}

const HomeCards: React.FC<homeCardsProps> = ({ cardsRef }) => {
  return (
    <div className="flex px-8 py-12  justify-center flex-col gap-20 md:h-screen">
      <motion.div
        className="font-bold text-2xl md:text-4xl text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        ref={cardsRef}
      >
        Choose what you want to dive in:
      </motion.div>
      <div className="flex justify-center flex-col items-center gap-9 flex-wrap md:flex-row">
        <Link to={"/characters-list"}>
          <motion.a
            href=""
            className="flex flex-col items-center gap-3 cursor-pointer max-w-xs "
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.h1 className="font-bold text-2xl font-custom">
              Characters
            </motion.h1>
            <motion.img
              className=" rounded-md  bg-center bg-cover"
              src="src/assets/Jon_Snow.webp"
            />
          </motion.a>
        </Link>

        <Link to={"/houses-list"}>
          <motion.a
            href=""
            className="flex flex-col items-center gap-3 cursor-pointer max-w-xs "
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.h1 className="font-bold text-2xl font-custom">
              Houses
            </motion.h1>
            <motion.img
              className=" rounded-md  bg-center bg-cover"
              src="src/assets/lannister.webp"
            />
          </motion.a>
        </Link>
      </div>
    </div>
  );
};

export default HomeCards;
