import { motion } from "motion/react";

const HomeCards = () => {
  return (
    <div
      className="flex px-8 py-12 mt-24 justify-center flex-col gap-20"
      id="cards"
    >
      <motion.div
        className="font-bold text-2xl md:text-4xl text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        Choose what you want to dive in:
      </motion.div>
      <div className="flex justify-center flex-col items-center gap-9 flex-wrap md:flex-row">
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
      </div>
    </div>
  );
};

export default HomeCards;
