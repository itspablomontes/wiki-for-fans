import { motion } from "motion/react";
import HousesListItem from "../components/HousesListItem";
import api from "../services/api";
import { useState, useEffect } from "react";
import { House } from "../types/HouseType";
import SkeletonList from "../components/SkeletonList";

const HousesList = () => {
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getHouses = async () => {
    try {
      const response = await api.get<House[]>("/houses");
      setHouses(response.data);
    } catch (error) {
      console.error("Error fetching houses", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getHouses();
  }, []);

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
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <SkeletonList key={index} />
            ))
          : Array.isArray(houses) &&
            houses?.map((house) => (
              <HousesListItem
                key={house.id}
                id={house.id}
                name={house.name}
                house_banner_url={house.house_banner_url}
              />
            ))}
      </div>
    </div>
  );
};

export default HousesList;
