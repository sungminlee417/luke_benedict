import React from "react";
import Image from "next/image";
import Link from "next/link";
import image from "../../public/images/About-Me-Photo-1.png";

const About = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl p-32">
      <figure>
        <Image src={image} alt="Picture of Luke Benedict" height={776} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Luke Benedict</h2>
        <p>
          is a pianist and composer born in 1996, who studied piano performance
          at Eastman School of Music and Boston Conservatory of Music, where he
          studied under Rebecca Penneys and Michael Lewin. He also earned
          degrees in music composition at Lynn University under the tutelage of
          Thomas McKinley.
        </p>
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
