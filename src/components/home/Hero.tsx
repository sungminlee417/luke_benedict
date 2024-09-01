import React from "react";
import Image from "next/image";
import backgroundImage from "../../../public/images/Landing-Page-Photo-1.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero min-h-screen relative">
      <Image
        src={backgroundImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />
      <div className="hero-overlay bg-opacity-60 absolute inset-0 z-0"></div>
      <div className="hero-content text-neutral-content text-center z-10 relative">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Robert Luke Benedict</h1>
          <p className="mb-5">Classical Pianist and Composer</p>
          <Link href="/discography" className="btn btn-primary">
            Discover His Music
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
