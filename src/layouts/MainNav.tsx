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
    <div className="navbar bg-neutral fixed z-20 w-full shadow-xl">
      <div className="navbar-start w-full">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-base-100"
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
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {LINKS.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="focus:text-secondary text-lg"
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
          className="btn btn-ghost text-2xl text-base-100"
        >
          Luke Benedict
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {LINKS.map((link, i) => (
            <li key={i} className="text-lg">
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-base-100 focus:text-secondary"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
