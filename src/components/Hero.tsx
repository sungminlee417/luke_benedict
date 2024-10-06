"use client";

import React from "react";
import Image from "next/image";
import { scrollToSection } from "@/helperFunctions/ui";
import { attributes } from "../../content/hero.md";

interface HeroData {
  header: string;
  subHeader: string;
  backgroundImage: string;
  lowerResBackgroundImage: string;
}

const Hero = () => {
  const { header, subHeader, backgroundImage, lowerResBackgroundImage } =
    attributes as HeroData;

  return (
    <section id="hero" className="hero min-h-screen relative">
      <Image
        src={backgroundImage}
        alt="Background Image"
        fill
        objectFit="cover"
        quality={100}
        placeholder="blur"
        className="-z-10"
        blurDataURL={lowerResBackgroundImage}
      />
      <div className="hero-overlay bg-opacity-60 absolute inset-0 z-0"></div>
      <div className="hero-content text-neutral-content text-center z-10 relative">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold">{header}</h1>
          <p className="mb-5 text-xl">{subHeader}</p>
          <button
            onClick={() => scrollToSection("discography")}
            className="btn btn-primary text-lg"
          >
            Discover His Music
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
