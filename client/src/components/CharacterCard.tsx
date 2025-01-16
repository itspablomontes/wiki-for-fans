import { motion } from "motion/react";

interface characterCardProps {
  name: string;
  born: string;
  died: string;
  house: string;
  titles: string[];
  affiliations: string[];
  phrase: string;
  profile_image_url: string;
}

const CharacterCard = ({
  name,
  born,
  died,
  house,
  titles,
  affiliations,
  phrase,
  profile_image_url,
}: characterCardProps) => {
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
        src={profile_image_url}
        alt={`${name} picture`}
        className="rounded-lg self-center  max-h-[400px] md:max-h-[500px] border-2 border-white"
      />
      <div>
        <b>Born:</b> {born}
      </div>
      <div>
        <b>Died:</b> {died}
      </div>
      <div>
        <b>House:</b> {house}
      </div>
      <div>
        <b>Titles:</b>
        <ul>
          {titles.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
      </div>
      <div>
        <b>Affiliations:</b>
        <ul>
          {affiliations.map((affiliation, index) => (
            <li key={index}>{affiliation}</li>
          ))}
        </ul>
      </div>
      <div>{phrase}</div>
    </motion.div>
  );
};

export default CharacterCard;
