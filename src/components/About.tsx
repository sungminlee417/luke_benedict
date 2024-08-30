import React from "react";
import Image from "next/image";
import Link from "next/link";
import image from "../../public/images/About-Me-Photo-1.png";
import { attributes, react as HomeContent } from "../../content/about.md";

const About = () => {
  const { header, content } = attributes;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl p-32">
      <figure>
        <Image src={image} alt="Picture of Luke Benedict" height={776} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{header}</h2>
        <p>{content}</p>
        <div className="card-actions justify-end">
          <Link href="/about" className="btn btn-primary">
            Read Full Bio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
