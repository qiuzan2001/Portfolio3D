import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <div className="text-white text-[18px] font-bold cursor-pointer flex sm:flex-row flex-col">
            <span>Portfolio</span>
            <span className="sm:ml-1 sm:mt-0 mt-1">| Zihan Qiu</span>
          </div>
        </Link>
        {/* Menu icon for mobile */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={isMenuOpen ? close : menu} alt="menu" className="w-6 h-6" />
        </button>
        {/* Menu items for desktop */}
        <ul className="hidden sm:flex sm:flex-row sm:gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18px] font-bold cursor-pointer`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        {/* Menu items for mobile */}
        <ul
          className={`fixed top-14 right-4 mt-2 bg-primary p-4 rounded-md shadow-lg sm:hidden transform transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`${
                  active === link.title
                    ? "text-white"
                    : "text-secondary"
                } hover:text-white text-[18px] font-bold cursor-pointer block mb-3`}
                onClick={() => {
                  setActive(link.title);
                  setIsMenuOpen(false);
                }}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
