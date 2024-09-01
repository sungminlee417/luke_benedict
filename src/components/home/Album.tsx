import React from "react";
import Image from "next/image";
import albumCover from "../../../public/images/landing-cover-2.png";
import album from "../../../public/images/muse-duo-gray.png";

const Album = () => {
  return (
    <section
      className="card relative h-[750px] m-24"
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
          <div className="flex items-center">
            <p className="text-xl">Listen on Spotify</p>
            <div className="md:hidden">
              <Image
                src="/icons/play-spotify.png"
                alt="Spotify logo"
                width={70}
                height={70}
              />
            </div>
            <div className="hidden md:block">
              <Image
                src="/icons/play-spotify.png"
                alt="Spotify logo"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
        <div>
          <Image src={album} alt="album cover" width={417} height={417} />
        </div>
      </div>
    </section>
  );
};

export default Album;
