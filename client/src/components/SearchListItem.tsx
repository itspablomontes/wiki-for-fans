import { Link } from "react-router-dom";
import { motion } from "motion/react";

interface SearchListItemProps {
  id?: number;
  name: string;
  image_result: string;
  result_endpoint: string;
}

export const SearchListItem = ({
  id,
  name,
  image_result,
  result_endpoint,
}: SearchListItemProps) => {
  return (
    <Link
      to={`/${result_endpoint}/${id}`}
      className="flex flex-col justify-center items-center gap-3 "
    >
      <motion.div
        className="p-1 hover:bg-gradient-to-r from-red-600  to-orange-700 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <img
          src={image_result}
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
