"use client";

import { scrollToSection } from "@/helperFunctions/ui";
import React from "react";

const LINKS = [
  { name: "About", id: "biography" },
  { name: "Concerts", id: "concerts" },
  { name: "Discography", id: "discography" },
  { name: "Gallery", id: "gallery" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  return (
    <div className="navbar bg-neutral fixed z-10 w-full">
      <div className="flex-1">
        <button
          onClick={() => scrollToSection("hero")}
          className="btn btn-ghost text-xl text-base-100"
        >
          Luke Benedict
        </button>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {LINKS.map((link, i) => (
            <li key={i}>
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
