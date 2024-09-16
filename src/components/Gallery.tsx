"use client";

import React from "react";
import Masonry from "react-masonry-css";
import image1 from "../../public/images/gallery/gallery-pic1.png";
import image2 from "../../public/images/gallery/gallery-pic10.png";
import image3 from "../../public/images/gallery/gallery-pic11.png";
import image4 from "../../public/images/gallery/gallery-pic12.png";
import image5 from "../../public/images/gallery/gallery-pic2.png";
import image6 from "../../public/images/gallery/gallery-pic3.png";

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

  const images: Image[] = [
    { src: image1.src, alt: "image1" },
    { src: image2.src, alt: "image2" },
    { src: image3.src, alt: "image3" },
    { src: image4.src, alt: "image4" },
    { src: image5.src, alt: "image5" },
    { src: image6.src, alt: "image6" },
  ];

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
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
    </section>
  );
};

export default Gallery;
