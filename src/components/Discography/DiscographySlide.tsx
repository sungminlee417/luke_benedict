import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

interface DiscographySlideProps {
  slide: {
    header: string;
    type: string;
    url: string;
  };
}

const DiscographySlide = ({ slide }: DiscographySlideProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="flex flex-col gap-3">
      <div>
        <h3 className="text-2xl text-base-100">{slide.header}</h3>
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
    </div>
  );
};

export default DiscographySlide;
