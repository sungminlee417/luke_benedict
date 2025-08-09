import React from "react";
import Image from "next/image";
import { attributes } from "../../content/biography.md";

interface Paragraph {
  text: string;
}

interface AboutPageAttributes {
  image: string;
  header: string;
  paragraphs: Paragraph[];
}

const Biography = () => {
  const { image, header, paragraphs } = attributes as AboutPageAttributes;

  return (
    <section
      id="biography"
      className="section-padding bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <Image
                src={image}
                alt="Picture of Luke Benedict"
                width={1250}
                height={1250}
                className="relative rounded-2xl shadow-2xl w-full object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                {header}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>
            <article className="space-y-4">
              {paragraphs.map((paragraph, i) => (
                <p key={i} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph.text}
                </p>
              ))}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
