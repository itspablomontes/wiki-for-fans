import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div className=" px-8 w-auto py-96 flex flex-col justify-center bg-hero-background bg-center text-2xl font-bold text-center bg-cover md:bg-[center_top]">
      <div>Discover the lore of Westeros</div>
      <motion.a href="" className="cursor-pointer">
        <motion.i className="bx bx-down-arrow"></motion.i>
      </motion.a>
    </div>
  );
};

export default HeroSection;
