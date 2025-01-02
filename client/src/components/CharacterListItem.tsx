import { Link } from "react-router-dom";

const CharacterListItem = () => {
  return (
    <Link
      to="/character"
      className="flex flex-col justify-center items-center gap-3 "
    >
      <div className="p-1 hover:bg-gradient-to-r from-red-600  to-orange-700 rounded-full">
        <img
          src="src/assets/jon-small-icon.webp"
          alt="jon snow"
          className="max-w-64 rounded-full"
        />
      </div>

      <div className="font-custom text-2xl ">Jon Snow</div>
    </Link>
  );
};

export default CharacterListItem;
