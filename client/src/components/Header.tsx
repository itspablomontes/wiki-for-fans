const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-8 md:px-32 bg-black drop-shadow-md">
      <a href="">
        <img
          src="src/assets/wikilogo.svg"
          alt="wiki logo"
          className="w-28 md:w-32 hover:scale-105 transition-all"
        />
      </a>
      <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
        <li className="p-3 hover:bg-gray-900 rounded-md transition-all cursor-pointer">
          Home
        </li>
        <li className="p-3 hover:bg-gray-900 rounded-md transition-all cursor-pointer">
          Characters
        </li>
        <li className="p-3 hover:bg-gray-900 rounded-md transition-all cursor-pointer">
          Houses
        </li>
      </ul>
      <div className="relative hidden md:flex items-center justify-center gap-3 ">
        <img
          src="src/assets/search.svg"
          alt="search logo"
          className="w-7 absolute left-3"
        />
        <input
          type="text"
          placeholder="Search..."
          className="py-2 pl-10 border-2 border-gray-900 bg-black text-white rounded-2xl focus:bg"
        />
      </div>
      <i className="bx bx-menu text-4xl xl:hidden block cursor pointer"></i>
    </header>
  );
};

export default Header;
