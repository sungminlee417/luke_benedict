import React from "react";
import Image from "next/image";
import image from "../../../public/images/piano-play.png";
import { attributes } from "../../../content/about-page.md";

interface Paragraph {
  text: string;
}

const About = () => {
  const { paragraphs } = attributes as { paragraphs: Paragraph[] };

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="font-bold text-4xl text-center mb-10">Biography</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <article className="lg:w-1/2 flex flex-col gap-4">
          {paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph.text}</p>
          ))}
        </article>
        <div className="relative lg:w-1/2 w-full">
          <Image
            src={image}
            alt="Picture of the author"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
