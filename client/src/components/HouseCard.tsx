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
      <table className="w-full border border-gray-300">
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="font-bold border-r border-gray-300 px-2 py-1">
              Coat of Arms:
            </td>
            <td className="px-2 py-1">{coat_of_arms}</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="font-bold border-r border-gray-300 px-2 py-1">
              Words:
            </td>
            <td className="px-2 py-1">{`"${words}"`}</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="font-bold border-r border-gray-300 px-2 py-1">
              Seat:
            </td>
            <td className="px-2 py-1">{seat}</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="font-bold border-r border-gray-300 px-2 py-1">
              Region:
            </td>
            <td className="px-2 py-1">{region}</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="font-bold border-r border-gray-300 px-2 py-1">
              Head:
            </td>
            <td className="px-2 py-1">{head}</td>
          </tr>
          <tr>
            <td className="font-bold border-r border-gray-300 px-2 py-1">
              Notable Characters:
            </td>
            <td className="px-2 py-1">
              <ul className="">
                {notable_characters.map((character, index) => (
                  <li key={index}>{`- ${character}`}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
}

export default HouseCard;
