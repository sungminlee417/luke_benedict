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
        backgroundImage: `url('/${backgroundImage}')`,
      }}
    >
      <div className="hero-overlay bg-gradient-to-b from-black/40 to-black/60 dark:from-black/20 dark:to-black/40 absolute inset-0 transition-colors"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="hero-content text-white dark:text-gray-100 text-center z-10 relative animate-fade-in">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight leading-none animate-slide-up">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-white">
                {header}
              </span>
            </h1>
            <div 
              className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            ></div>
          </div>
          <p
            className="text-xl md:text-2xl lg:text-3xl font-light text-gray-100 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            {subHeader}
          </p>
          <div 
            className="pt-4 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              onClick={() => scrollToSection("discography")}
              className="group btn btn-primary px-10 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:bg-secondary"
            >
              <span className="mr-2">Discover His Music</span>
              <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
