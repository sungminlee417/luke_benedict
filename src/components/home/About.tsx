import React from "react";
import Image from "next/image";
import Link from "next/link";
import image from "../../../public/images/About-Me-Photo-1.png";
import { attributes } from "../../../content/about.md";

const About = () => {
  const { header, content } = attributes;
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-10">
        <figure className="shadow-xl">
          <Image
            src={image}
            alt="Picture of Luke Benedict"
            height={1242}
            className="rounded-xl"
          />
        </figure>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl lg:text-4xl">{header}</h2>
          <p className="flex-grow text-lg lg:text-xl">{content}</p>
          <div className="card-actions justify-end">
            <Link href="/about" className="btn btn-primary">
              Read Full Bio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
