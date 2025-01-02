import CharacterListItem from "../components/CharacterListItem";

const CharactersList = () => {
  return (
    <div className="flex flex-col justify-center items-center py-8 px-6 gap-9">
      <div className="font-bold text-3xl">CHARACTERS</div>
      <div className="grid md:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr] gap-6 wrap">
        <CharacterListItem />
        <CharacterListItem />
        <CharacterListItem />
        <CharacterListItem />
        <CharacterListItem />
        <CharacterListItem />
        <CharacterListItem />
        <CharacterListItem />
      </div>
    </div>
  );
};

export default CharactersList;
