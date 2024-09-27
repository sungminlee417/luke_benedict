import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

interface DiscographySlideProps {
  slide: {
    header: string;
    type: string;
    url: string;
    image?: StaticImageData;
  };
}

const DiscographySlide = ({ slide }: DiscographySlideProps) => {
  console.log(slide?.image);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="flex flex-col gap-3 h-full">
      <div>
        <h3 className="text-2xl text-base-100">
          <Link href={slide.url} target="_blank" className="hover:underline">
            {slide.header}
          </Link>
        </h3>
      </div>
      {slide.type === "Video URL" && (
        <ReactPlayer
          url={slide.url}
          controls
          width="100%"
          height="100%"
          className="aspect-video"
        />
      )}
      {slide.type === "Image Link" && slide.image && (
        <div className="relative flex-grow">
          <Image
            src={slide.image}
            alt={slide.header}
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}
    </div>
  );
};

export default DiscographySlide;
