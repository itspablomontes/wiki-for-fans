import { motion } from "motion/react";

interface HouseCardProps {
  name: string;
  coat_of_arms: string;
  words: string;
  seat: string;
  region: string;
  head: string;
  notable_characters: string[];
  house_banner_url: string;
}

function HouseCard({
  name,
  coat_of_arms,
  words,
  seat,
  region,
  head,
  notable_characters,
  house_banner_url,
}: HouseCardProps) {
  return (
    <motion.div
      className="flex py-3 px-3 sm:px-5 flex-col justify-center align-center gap-3 text-start text-xl md:col-start-1 md:col-end-1 bg-gray-950 border-2 border-gray-700 rounded-xl shadow-xl self-start "
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <div className="font-bold font-custom text-2xl text-center xl:text-3xl">
        {name}
      </div>
      <img
        src={house_banner_url}
        alt={coat_of_arms}
        className="rounded-lg self-center  max-h-[400px] md:max-h-[500px] border-2 border-white"
      />
      <div>
        <b>Coat of Arms: </b>
        {coat_of_arms}
      </div>
      <div>
        <b>Words: </b>
        {`"${words}"`}
      </div>
      <div>
        <b>Seat: </b> {seat}
      </div>
      <div>
        <b>Region: </b> {region}
      </div>
      <div>
        <b>Head: </b> {head}
      </div>
      <div>
        <b>Notable Characters: </b>
        <ul>
          {notable_characters.map((character, index) => (
            <li key={index}>{character}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default HouseCard;
