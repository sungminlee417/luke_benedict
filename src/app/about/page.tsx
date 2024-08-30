import React from "react";
import Image from "next/image";
import Link from "next/link";
import image from "../../../public/images/About-Me-Photo-1.png";

const About = () => {
  return (
    <section className="pt-20 flex gap-[60px] lg:flex-col lg:items-center mx-auto max-w-[1242px] px-5">
      <h2 className="text-[40px] font-bold text-black mb-[60px] lg:mb-[20px]  text-center hidden lg:block">
        About Me
      </h2>
      <div className="relative">
        <Image
          src={image}
          alt="Picture of the author"
          width={518}
          height={776}
        />
      </div>
      <article>
        <h2 className="text-[40px]  font-bold text-black mb-[25px] text-center lg:hidden sm:text-[20px]">
          About Me
        </h2>
        <p className="text-[32px] mb-[52px] text-black max-w-[569px] xl:text-[24px] lg:text-[32px] md:text-[20px] sm:text-[15px]">
          Luke Benedict is a pianist and composer born in 1996, who studied
          piano performance at Eastman School of Music and Boston Conservatory
          of Music, where he studied under Rebecca Penneys and Michael Lewin. He
          also earned degrees in music composition at Lynn University under the
          tutelage of Thomas McKinley.{" "}
        </p>
        <Link href="/about">
          <p
            className="text-center text-[32px] hover:opacity-75 text-black sm:text-[15px] transition-all duration-100 ease-in-out
          "
          >
            <span className="border-red-50 border-2 bg-red-800 text-white p-4 ">
              Read Full Bio
            </span>
          </p>
        </Link>
      </article>
    </section>
  );
};

export default About;
