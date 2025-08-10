"use client";

import { scrollToSection } from "@/helperFunctions/ui";
import React, { useState } from "react";
import { useDarkMode } from "@/contexts/DarkModeContext";

const LINKS = [
  { name: "About", id: "biography" },
  { name: "Concerts", id: "concerts" },
  { name: "Discography", id: "discography" },
  { name: "Videos", id: "videos" },
  { name: "Compositions", id: "compositions" },
  { name: "Gallery", id: "gallery" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleLinkClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm fixed z-20 w-full shadow-md border-b border-gray-100 dark:border-gray-800 transition-colors px-4">
        <div className="navbar-start flex-1">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-neutral dark:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {dropdownOpen && (
              <ul className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 rounded-lg z-[1] mt-3 w-52 p-2 shadow-lg border border-gray-100 dark:border-gray-700">
                {LINKS.map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => handleLinkClick(link.id)}
                      className="text-neutral dark:text-gray-200 hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/10 rounded-md transition-all text-lg font-medium py-2 px-3"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold text-primary dark:text-primary hover:opacity-80 transition-opacity"
          >
            Luke Benedict
          </button>
        </div>
        <div className="navbar-center hidden lg:flex flex-1 justify-center">
          <ul className="menu menu-horizontal px-1 gap-1">
            {LINKS.map((link, i) => (
              <li key={i}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-neutral hover:text-primary font-medium px-2 py-2 rounded-lg hover:bg-primary/10 transition-all dark:text-gray-200 dark:hover:text-primary whitespace-nowrap"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end flex-1 justify-end">
          <button
            onClick={toggleDarkMode}
            className="btn btn-ghost p-2 rounded-lg hover:bg-primary/10 transition-all"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
    </nav>
  );
};

export default Navbar;
