"use client";

import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { attributes } from "../../content/gallery.md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface Image {
  image: string;
  alt: string;
}

const Gallery = () => {
  const { images } = attributes as { images: Image[] };

  const [activeModal, setActiveModal] = useState<number | null>(null);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const closeModal = () => setActiveModal(null);

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 relative">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, i) => (
          <div key={i} className="relative">
            <button onClick={() => setActiveModal(i)}>
              <img src={image.image} alt={image.alt || "gallery image"} />
            </button>

            <input
              type="checkbox"
              id={`gallery-image-modal-${i}`}
              className="modal-toggle"
              checked={activeModal === i}
              readOnly
            />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor={`gallery-image-modal-${i}`}
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                  onClick={() => closeModal()}
                >
                  <FontAwesomeIcon icon={faXmark} size="sm" />
                </label>
                <img
                  src={image.image}
                  alt={image.alt || "gallery image"}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </Masonry>
    </section>
  );
};

export default Gallery;
