import { motion } from "motion/react";

interface HeroSectionProps {
  scrollToCards: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToCards }) => {
  return (
    <div className=" px-8 w-auto py-96 md:py-[25rem] flex flex-col gap-5 justify-center bg-hero-background bg-center font-bold text-center bg-cover md:bg-[center_top]">
      <motion.div
        className="md:text-4xl font-custom text-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        DISCOVER THE LORE OF WESTEROS
      </motion.div>
      <motion.button
        onClick={scrollToCards}
        className="cursor-pointer flex justify-center px-6 py-3 w-min bg-[#FE0000] rounded-lg self-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore
      </motion.button>
    </div>
  );
};

export default HeroSection;
