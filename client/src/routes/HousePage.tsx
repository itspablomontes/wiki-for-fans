import HouseCard from "../components/HouseCard";
import HouseDescription from "../components/HouseDescription";
import { House } from "../types/HouseType";
import api from "../services/api";
import { ApiHouseResponseType } from "../types/ApiResponseType";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const HousePage = () => {
  const { id } = useParams<{ id: string }>();
  const [house, setHouse] = useState<House>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getHouse = async () => {
    if (!id) return;
    try {
      const response = await api.get<ApiHouseResponseType>(`houses/find/${id}`);
      setHouse(response.data.data);
    } catch (error) {
      console.error("Error fetching house", error);
      setError("Failed to load house data");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getHouse();
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!house) return <div>House Not Found</div>;

  return (
    <div className="py-4 px-6 grid gap-12 justify-center md:grid-cols-[2fr_3fr]">
      <HouseCard
        name={house.name}
        coat_of_arms={house.coat_of_arms}
        words={house.words}
        seat={house.seat}
        region={house.region}
        head={house.head}
        notable_characters={house.notable_characters}
        house_banner_url={house.house_banner_url}
      />
      <HouseDescription description={house.description} />
    </div>
  );
};

export default HousePage;
