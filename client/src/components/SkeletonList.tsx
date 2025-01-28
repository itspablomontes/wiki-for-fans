import { motion } from "motion/react";

const SkeletonList = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <motion.div
        className="p-1 rounded-full bg-gradient-to-r from-gray-600 to-gray-500"
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
          className="w-64 h-64 rounded-full bg-gray-400"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
            ease: "easeInOut",
          }}
        ></motion.div>
      </motion.div>
      <motion.div
        className="h-8 w-32 bg-gray-500 rounded"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
          ease: "easeInOut",
        }}
      ></motion.div>
    </div>
  );
};

export default SkeletonList;
