import { Link } from "react-router-dom";
import { motion } from "motion/react";

interface CharacterListItemProps {
  id?: number;
  name: string;
  profile_image_url: string;
}

const CharacterListItem = ({
  id,
  name,
  profile_image_url,
}: CharacterListItemProps) => {
  return (
    <Link
      to={`/character/${id}`}
      className="flex flex-col justify-center items-center gap-3 "
    >
      <motion.div
        className="p-1 hover:bg-gradient-to-r from-red-600  to-orange-700 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <img
          src={profile_image_url}
          alt={`${name} picture`}
          className="max-w-64 rounded-full"
        />
      </motion.div>

      <motion.div
        className="font-custom text-2xl text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        {name}
      </motion.div>
    </Link>
  );
};

export default CharacterListItem;
