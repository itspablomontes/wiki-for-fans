import { motion } from "motion/react";

const HouseDescription = () => {
  return (
    <motion.div
      className="flex flex-col p-6 align-center justify-center text-start gap-6  bg-gray-950 border-2 border-gray-700 rounded-xl "
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <div className="font-bold text-3xl font-custom">Description</div>
      <div className="text-start flex flex-col gap-4 text-xl">
        <p>
          House Lannister rules over the Westerlands from their ancestral seat,
          Casterly Rock, a massive rocky promontory overlooking the Sunset Sea.
          For millennia, the Rock has been fortified and inhabited, serving as a
          symbol of the Lannisters' wealth and power. The family holds the
          titles of Lords Paramount of the Westerlands and Wardens of the West.
          As a royal house during their ascendancy, they also controlled the
          Crownlands from the Red Keep in King’s Landing, the traditional seat
          of the monarchy.
        </p>
        <p>
          The Lannister heraldry features a golden lion on a crimson field,
          accompanied by their official motto, "Hear Me Roar!", though this
          phrase is rarely spoken. Instead, their unofficial but infamous
          saying, "A Lannister always pays his debts," is far better known—often
          uttered with negative connotations, though it can also carry its
          literal meaning.
        </p>
        <p>
          The incestuous relationship between Cersei and Jaime Lannister was
          hidden through an elaborate conspiracy. Their son, Joffrey Baratheon,
          claimed the Iron Throne under the false pretense of being the
          legitimate son of the late King Robert Baratheon. During his reign in
          the War of the Five Kings, the Lannisters’ patriarch, Tywin Lannister,
          served as a crucial supporter and strategist.
        </p>
        <p>
          The family retained influence when Tommen Baratheon, Joffrey's younger
          brother, became king. During this period, Kevan Lannister acted as
          Hand of the King and Protector of the Realm. However, the Lannisters’
          grip on power faltered as Tommen came under the sway of the Faith of
          the Seven. After the destruction of the Great Sept of Baelor, Cersei
          Lannister seized the throne, crowning herself Queen.
        </p>
        <p>
          With the deaths of Cersei and Jaime during the Battle of King’s
          Landing, their younger brother, Tyrion Lannister, became the head of
          House Lannister. Following the dissolution of the monarchy, Tyrion
          relinquished any claims to the throne in favor of an elective
          monarchy. House Lannister now swears fealty directly to the King of
          the Andals and the First Men, a position currently held by Bran Stark.
        </p>
      </div>
    </motion.div>
  );
};

export default HouseDescription;
