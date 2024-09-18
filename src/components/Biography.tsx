import React from "react";
import Image from "next/image";
import image from "../../public/images/About-Me-Photo-1.png";
import { attributes } from "../../content/biography.md";

interface Paragraph {
  text: string;
}

interface AboutPageAttributes {
  header: string;
  paragraphs: Paragraph[];
}

const Biography = () => {
  const { header, paragraphs } = attributes as AboutPageAttributes;

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-10 w-100 justify-between">
        <Image
          src={image}
          alt="Picture of Luke Benedict"
          height={1242}
          className="rounded-xl shadow-xl"
        />
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl lg:text-2xl text-accent">
            {header}
          </h2>
          <article className="flex flex-col gap-4">
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
