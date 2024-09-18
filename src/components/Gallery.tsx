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
        {images.map((image, i) => (
          <div key={i}>
            <button
              onClick={() => {
                const modal = document.getElementById(
                  `gallery-image-modal-${i}`
                );
                if (modal) {
                  (modal as HTMLDialogElement).showModal();
                }
              }}
            >
              <img src={image.image} alt={image.alt || "gallery image"} />
            </button>
            <dialog id={`gallery-image-modal-${i}`} className="modal">
              <div className="modal-box p-0">
                <div className="modal-action w-full m-0">
                  <form method="dialog" className="w-full h-full">
                    <img
                      src={image.image}
                      alt={image.alt || "gallery image"}
                      className="w-full h-full object-cover"
                    />
                    <button className="btn absolute top-0 right-0">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        ))}
      </Masonry>
    </section>
  );
};

export default Gallery;
