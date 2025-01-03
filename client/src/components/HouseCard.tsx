import { motion } from "motion/react";

function HouseCard() {
  return (
    <motion.div
      className="flex py-3 px-3 sm:px-5 flex-col justify-center align-center gap-3 text-start text-xl md:col-start-1 md:col-end-1 bg-gray-950 border-2 border-gray-700 rounded-xl shadow-xl self-start "
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <div className="font-bold font-custom text-2xl text-center xl:text-3xl">
        House Lannister
      </div>
      <img
        src="src/assets/house-lannister.webp"
        alt="lannister banner"
        className="rounded-lg self-center  max-h-[400px] md:max-h-[500px] border-2 border-white"
      />
      <div>
        <b>Coat of Arms: </b>A roaring lion, gold on crimson
      </div>
      <div>
        <b>Words: </b>"Hear Me Roar!"
      </div>
      <div>
        <b>Seat: </b> Casterly Rock - Red Keep, King's Landing (303-305 AC)
      </div>
      <div>
        <b>Head: </b> Tyrion Lannister
      </div>
      <div>
        <b>Notable Characters: </b> Tywin Lannister, Cersei Lannister, Jaime
        Lannister, Tyrion Lannister.
      </div>
    </motion.div>
  );
}

export default HouseCard;
