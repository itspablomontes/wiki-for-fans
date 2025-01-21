import { motion } from "motion/react";

interface HouseDescriptionProps {
  description: string[];
}

const HouseDescription = ({ description }: HouseDescriptionProps) => {
  return (
    <motion.div
      className="flex flex-col p-6 align-center justify-start text-start gap-6  bg-gray-950 border-2 border-gray-700 rounded-xl "
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <div className="font-bold text-3xl font-custom">Description</div>
      <div className="text-start flex flex-col gap-4 text-xl">
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </motion.div>
  );
};

export default HouseDescription;
