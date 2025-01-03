import HouseCard from "../components/HouseCard";
import HouseDescription from "../components/HouseDescription";

const House = () => {
  return (
    <div className="py-8 px-6 grid gap-12 justify-center md:grid-cols-[2fr_3fr]">
      <HouseCard />
      <HouseDescription />
    </div>
  );
};

export default House;
