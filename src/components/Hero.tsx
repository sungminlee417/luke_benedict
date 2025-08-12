"use client";

import React, { useEffect, useState } from "react";
import { scrollToSection } from "@/helperFunctions/ui";
import { attributes } from "../../content/hero.md";

interface HeroData {
  header: string;
  subHeader: string;
  description?: string;
  backgroundImage: string;
  buttonText?: string;
  buttonDestination?: string;
  textAlignment?: string;
  contentPosition?: string;
  backgroundPosition?: string;
  backgroundOverlay?: string;
  buttonStyle?: string;
}

const Hero = () => {
  const { 
    header, 
    subHeader, 
    description,
    backgroundImage, 
    buttonText = "Discover His Music",
    buttonDestination = "discography",
    textAlignment = "center",
    contentPosition = "center",
    backgroundPosition = "center",
    buttonStyle = "primary"
  } = attributes as HeroData;

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          // Only update if scroll position changed significantly (reduces repaints)
          if (Math.abs(currentScrollY - lastScrollY) > 2) {
            setScrollY(currentScrollY);
            lastScrollY = currentScrollY;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Set initial scroll position
    setScrollY(window.scrollY);
    lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      className="hero min-h-screen-mobile relative overflow-hidden"
    >
      {/* Parallax background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url('/${backgroundImage}')`,
          transform: `translateY(${scrollY * 0.5}px)`,
          height: '120%',
          top: '-10%'
        }}
      />
      {/* Simple, elegant overlay */}
      <div className="hero-overlay bg-black/40 dark:bg-black/60 absolute inset-0 z-10"></div>
      <div className={`hero-content text-white ${textAlignment === 'center' ? 'text-center' : textAlignment === 'left' ? 'text-left' : 'text-right'} z-20 relative`}>
        <div className="max-w-4xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              <span className="block text-white drop-shadow-lg">
                {header}
              </span>
            </h1>
            <div 
              className={`w-24 h-1 bg-primary ${textAlignment === 'center' ? 'mx-auto' : textAlignment === 'left' ? 'mr-auto' : 'ml-auto'} rounded-full`}
            ></div>
          </div>
          <p
            className={`text-xl md:text-2xl lg:text-3xl font-light text-gray-100 max-w-3xl ${textAlignment === 'center' ? 'mx-auto' : textAlignment === 'left' ? 'mr-auto' : 'ml-auto'} leading-relaxed`}
          >
            {subHeader}
          </p>
          {description && description.trim().length > 0 && (
            <p
              className={`text-lg md:text-xl text-gray-200 max-w-2xl ${textAlignment === 'center' ? 'mx-auto' : textAlignment === 'left' ? 'mr-auto' : 'ml-auto'} leading-relaxed`}
            >
              {description}
            </p>
          )}
          <div 
            className="pt-4 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              onClick={() => scrollToSection(buttonDestination)}
              className={`group ${
                buttonStyle === 'secondary' ? 'bg-secondary hover:bg-secondary/90' : 
                buttonStyle === 'outline' ? 'bg-transparent border-2 border-white hover:bg-white hover:text-gray-900' : 
                'bg-primary hover:bg-primary/90'
              } text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105`}
            >
              <span className="mr-2">{buttonText}</span>
              <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
