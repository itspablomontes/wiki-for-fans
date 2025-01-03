import { motion } from "motion/react";
import HousesListItem from "../components/HousesListItem";

const HousesList = () => {
  return (
    <div className="flex flex-col justify-center items-center py-8 px-6 gap-9">
      <motion.div
        className="font-bold text-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        HOUSES
      </motion.div>
      <div className="grid md:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr] gap-6 wrap">
        <HousesListItem />
        <HousesListItem />
        <HousesListItem />
        <HousesListItem />
        <HousesListItem />
        <HousesListItem />
        <HousesListItem />
        <HousesListItem />
      </div>
    </div>
  );
};

export default HousesList;
