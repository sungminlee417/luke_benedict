"use client";

import { scrollToSection } from "@/helperFunctions/ui";
import React, { useState } from "react";

const LINKS = [
  { name: "About", id: "biography" },
  { name: "Concerts", id: "concerts" },
  { name: "Discography", id: "discography" },
  { name: "Compositions", id: "compositions" },
  { name: "Gallery", id: "gallery" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLinkClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar bg-white/95 backdrop-blur-sm fixed z-20 w-full shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-neutral"
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
              <ul className="menu menu-sm dropdown-content bg-white rounded-lg z-[1] mt-3 w-52 p-2 shadow-lg border border-gray-100">
                {LINKS.map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => handleLinkClick(link.id)}
                      className="text-neutral hover:text-primary hover:bg-primary/10 rounded-md transition-all text-lg font-medium py-2 px-3"
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
            className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
          >
            Luke Benedict
          </button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {LINKS.map((link, i) => (
              <li key={i}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-neutral hover:text-primary font-medium px-4 py-2 rounded-lg hover:bg-primary/10 transition-all"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
