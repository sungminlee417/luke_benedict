"use client";

import React from "react";
import Masonry from "react-masonry-css";
import { attributes } from "../../content/gallery.md";

interface Image {
  image: string;
  alt: string;
}

const Gallery = () => {
  const { images } = attributes as { images: Image[] };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.image} alt={image.alt || "gallery image"} />
          </div>
        ))}
      </Masonry>
    </section>
  );
};

export default Gallery;
