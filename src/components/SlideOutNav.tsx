"use client";

import React, { useState, useEffect } from "react";
import { scrollToSection } from "@/helperFunctions/ui";
import { useDarkMode } from "@/contexts/DarkModeContext";

const LINKS = [
  { name: "About", id: "biography" },
  { name: "Concerts", id: "concerts" },
  { name: "Discography", id: "discography" },
  { name: "Compositions", id: "compositions" },
  { name: "Gallery", id: "gallery" },
  { name: "Contact", id: "contact" },
];

const SlideOutNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleLinkClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Prevent body scroll when nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-40 bg-primary hover:bg-secondary text-white p-2 sm:p-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl group"
        aria-label="Open navigation menu"
      >
        <svg 
          className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Backdrop - only on desktop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in hidden sm:block"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide Out Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out sm:border-l border-gray-200 dark:border-gray-700 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold text-primary dark:text-primary hover:opacity-80 transition-opacity"
          >
            Luke Benedict
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close navigation menu"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 sm:p-6">
          <ul className="space-y-4">
            {LINKS.map((link, i) => (
              <li key={i}>
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className="w-full text-left text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary py-3 px-4 rounded-lg hover:bg-primary/10 transition-all duration-200 transform hover:translate-x-2"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer with Dark Mode Toggle */}
        <div className="p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-3 w-full text-left py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
            <span className="text-gray-700 dark:text-gray-300">
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SlideOutNav;