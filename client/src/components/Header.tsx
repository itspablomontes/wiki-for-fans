import { motion } from "motion/react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-6 px-8 md:px-32 bg-black drop-shadow-md">
      <motion.a
        href=""
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <img
          src="src/assets/wikilogo.svg"
          alt="wiki logo"
          className="w-24 md:w-32 hover:scale-105 transition-all"
        />
      </motion.a>
      <motion.ul
        className="hidden xl:flex items-center gap-12 font-semibold text-base"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <motion.li
          className="p-3 hover:bg-gray-900 rounded-md transition-all cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
        >
          Home
        </motion.li>
        <motion.li
          className="p-3 hover:bg-gray-900 rounded-md transition-all cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
        >
          Characters
        </motion.li>
        <motion.li
          className="p-3 hover:bg-gray-900 rounded-md transition-all cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
        >
          Houses
        </motion.li>
      </motion.ul>
      <motion.form
        className="hidden relative md:flex items-center justify-center gap-3 "
        whileHover={{ scale: 1.05 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <img
          src="src/assets/search.svg"
          alt="search logo"
          className="w-7 absolute left-3"
        />
        <motion.input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          className="py-2 pl-10 border-2 border-gray-900 bg-black text-white rounded-2xl"
        />
      </motion.form>
      <motion.div className="flex flex-row items-center gap-4">
        <motion.i
          className="bx bx-search text-2xl md:hidden font-bold"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setIsSearchOpen(!isSearchOpen);
          }}
        ></motion.i>
        <motion.i
          className="bx bx-menu text-4xl xl:hidden block cursor pointer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </motion.div>
      <motion.div
        className={`absolute xl:hidden top-24 left-0 w-full  bg-zinc-900 flex flex-col items-center gap-6 font-semibold text-lg ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.li className="list-none w-full text-center p-4 hover:bg-gray-900 border-y-2 border-x-white cursor-pointer">
          Home
        </motion.li>
        <motion.li className="list-none w-full text-center p-4 hover:bg-gray-900 border-y-2 border-x-white cursor-pointer">
          Characters
        </motion.li>
        <motion.li className="list-none w-full text-center p-4 hover:bg-gray-900 border-y-2 border-x-white cursor-pointer">
          Houses
        </motion.li>
      </motion.div>
      <motion.form
        className={`absolute xl:hidden top-24 left-0 flex justify-center ${
          isSearchOpen ? "opacity-1" : "opacity-0"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isSearchOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          className="py-2 px-2 border-2 border-gray-900 bg-black text-white rounded-2xl w-4/5"
        />
      </motion.form>
    </header>
  );
};

export default Header;
