import React from "react";
import Image from "next/image";
import albumCover from "../../public/images/landing-cover-2.png";
import album from "../../public/images/muse-duo-gray.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

const Album = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div
        className="card h-[700px] relative"
        style={{
          backgroundImage: `url(${albumCover.src})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute flex flex-col lg:flex-row gap-10 items-center justify-between top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col gap-6 font-bold">
            <h2 className="text-2xl">
              Experiments by <br /> Robert Luke Benedict
            </h2>
            <h2 className="text-[#AA1E23] text-xl">Cereusle</h2>
            <div className="flex items-center gap-2">
              <p className="text-xl">Listen on Spotify</p>
              <FontAwesomeIcon icon={faSpotify} size="lg" />
            </div>
          </div>
          <div>
            <Image src={album} alt="album cover" width={417} height={417} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Album;
