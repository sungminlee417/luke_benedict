import React from "react";
import Masonry from "react-masonry-css";

interface Image {
  src: string;
  alt: string;
}

const Gallery = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const images: Image[] = [];

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt || "gallery image"} />
        </div>
      ))}
    </Masonry>
  );
};

export default Gallery;
