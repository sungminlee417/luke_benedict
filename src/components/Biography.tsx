import React from "react";
import Image from "next/image";
import { attributes } from "../../content/biography.md";

interface Paragraph {
  text: string;
}

interface AboutPageAttributes {
  image: string;
  alt: string;
  header: string;
  paragraphs: Paragraph[];
}

const Biography = () => {
  const { image, alt, header, paragraphs } = attributes as AboutPageAttributes;

  return (
    <section
      id="biography"
      className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col lg:flex-row gap-10 w-100 justify-between">
        <Image
          src={image}
          alt={alt}
          height={1242}
          className="rounded-xl shadow-xl w-full object-cover"
        />
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl lg:text-4xl text-secondary">
            {header}
          </h2>
          <article className="flex flex-col gap-4 text-xl">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph.text}</p>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Biography;
