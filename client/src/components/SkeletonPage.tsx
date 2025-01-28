import { motion } from "motion/react";

const SkeletonPage = () => {
  return (
    <div className="py-4 px-6 grid gap-12 justify-center md:grid-cols-[2fr_3fr] h-screen">
      <motion.div
        className="flex flex-col justify-center items-center gap-5 p-5 bg-gray-950 border-2 border-gray-700 rounded-xl shadow-lg animate-pulse"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="w-24 h-24 rounded-full bg-gray-400"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
        ></motion.div>
        <motion.div
          className="w-40 h-6 bg-gray-500 rounded mt-4"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
        ></motion.div>
        <motion.div
          className="w-48 h-6 bg-gray-500 rounded mt-2"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
        ></motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col justify-start p-6 bg-gray-950 border-2 border-gray-700 rounded-xl shadow-lg animate-pulse"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="w-32 h-6 bg-gray-500 rounded mb-4"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
        ></motion.div>
        <motion.div
          className="h-4 w-72 bg-gray-500 rounded mb-2"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
        ></motion.div>
        <motion.div
          className="h-4 w-64 bg-gray-500 rounded mb-2"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default SkeletonPage;
