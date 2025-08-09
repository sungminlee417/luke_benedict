"use client";

import React from "react";
import { scrollToSection } from "@/helperFunctions/ui";
import { attributes } from "../../content/hero.md";

interface HeroData {
  header: string;
  subHeader: string;
  backgroundImage: string;
}

const Hero = () => {
  const { header, subHeader, backgroundImage } = attributes as HeroData;

  return (
    <section 
      id="hero" 
      className="hero min-h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/${backgroundImage}')`
      }}
    >
      <div className="hero-overlay bg-gradient-to-b from-black/50 to-black/70 dark:from-black/30 dark:to-black/50 absolute inset-0 transition-colors"></div>
      <div className="hero-content text-white dark:text-gray-100 text-center z-10 relative animate-in">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-up">
            {header}
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-100 dark:text-gray-200 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            {subHeader}
          </p>
          <button
            onClick={() => scrollToSection("discography")}
            className="btn btn-primary px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Discover His Music
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
