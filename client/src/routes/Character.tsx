import CharacterCard from "../components/CharacterCard";
import CharacterDescription from "../components/CharacterDescription";

const Character = () => {
  return (
    <div className="py-8 px-6 grid gap-12 justify-center md:grid-cols-[2fr_3fr]">
      <CharacterCard />
      <CharacterDescription />
    </div>
  );
};

export default Character;
