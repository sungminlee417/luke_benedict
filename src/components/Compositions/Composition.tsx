import Image from "next/image";
import React from "react";

interface CompositionProps {
  composition: {
    title: string;
    image: string;
    alt: string;
  };
}

const Composition = ({ composition }: CompositionProps) => {
  return (
    <div className="text-center w-fit h-fit">
      <h3 className="mb-5">{composition.title}</h3>
      <Image
        className="shadow-xl transition-all hover:-translate-y-1"
        src={composition.image}
        width={300}
        height={300}
        alt={composition.alt}
      />
    </div>
  );
};

export default Composition;
