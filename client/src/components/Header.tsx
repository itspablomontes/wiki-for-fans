import { motion } from "motion/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const menuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
  };

  const searchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
      setQuery("");
    }
  };

  return (
    <>
      <header className="flex justify-between items-center py-6 px-8 md:px-32 bg-black drop-shadow-md sticky top-0 z-50">
        {/*  Nav Bar  */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <Link to={"/"}>
            <img
              src="/images/wikilogo.svg"
              alt="wiki logo"
              className="w-24 md:w-32 hover:scale-105 transition-all"
            />
          </Link>
        </motion.div>
        <motion.ul
          className="hidden xl:flex items-center gap-12 font-semibold text-base"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <Link to={"/"}>
            <motion.li
              className="p-3 hover:bg-gray-900 rounded-md transition-all cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.5 }}
            >
              Home
            </motion.li>
          </Link>

          <Link to={"/characters-list"}>
            <motion.li
              className="p-3 hover:bg-gray-900 rounded-md transition-all cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.5 }}
            >
              Characters
            </motion.li>
          </Link>
          <Link to={"/houses-list"}>
            <motion.li
              className="p-3 hover:bg-gray-900 rounded-md transition-all cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.5 }}
            >
              Houses
            </motion.li>
          </Link>
        </motion.ul>

        {/*  Search Bar  */}
        <motion.form
          onSubmit={handleSearch}
          className="hidden relative md:flex items-center justify-center gap-3 "
          whileHover={{ scale: 1.05 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <img
            src="/images/search.svg"
            alt="search logo"
            className="w-7 absolute left-3"
          />
          <motion.input
            type="search"
            name="search"
            id="search"
            value={query}
            placeholder="Search..."
            className="py-2 pl-10 border-2 border-gray-900 bg-black text-white rounded-2xl"
            onChange={(e) => setQuery(e.target.value)}
          />
        </motion.form>

        <motion.div className="flex flex-row items-center gap-4 xl:hidden">
          <motion.i
            className="bx bx-search text-2xl md:hidden font-bold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              searchToggle();
            }}
          ></motion.i>
          <motion.i
            className="bx bx-menu text-4xl xl:hidden block cursor pointer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => menuToggle()}
          />
        </motion.div>
      </header>

      {/*  Mobile Nav Bar  */}
      <motion.div
        className={`sticky z-50 top-24 xl:hidden h-screen left-0 w-full bg-zinc-900 flex flex-col items-center gap-6 font-semibold text-lg ${
          isMenuOpen ? "opacity-100" : "hidden"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Link
          to={"/"}
          className="list-none w-full text-center p-4 hover:bg-gray-900 border-y-2 border-x-white cursor-pointer"
          onClick={() => menuToggle()}
        >
          Home
        </Link>
        <Link
          to={"/characters-list"}
          className="list-none w-full text-center p-4 hover:bg-gray-900 border-y-2 border-x-white cursor-pointer"
          onClick={() => menuToggle()}
        >
          Characters
        </Link>
        <Link
          to={"/houses-list"}
          className="list-none w-full text-center p-4 hover:bg-gray-900 border-y-2 border-x-white cursor-pointer"
          onClick={() => menuToggle()}
        >
          Houses
        </Link>
      </motion.div>

      {/*  Mobile Search Bar  */}
      <motion.form
        onSubmit={handleSearch}
        className={`sticky z-50 xl:hidden top-24 left-0 flex justify-center w-full ${
          isSearchOpen ? "opacity-100" : "hidden"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isSearchOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.input
          type="search"
          name="search"
          id="search"
          value={query}
          placeholder="Search..."
          className="py-2 px-2 border-2 border-gray-900 bg-black text-white rounded-2xl w-4/5"
          onChange={(e) => setQuery(e.target.value)}
        />
      </motion.form>
    </>
  );
};

export default Header;
