"use client";

import React, { useState } from "react";
import { attributes } from "../../content/gallery.md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface Image {
  image: string;
  alt: string;
}

const Gallery = () => {
  const { images } = attributes as { images: Image[] };

  const [activeModal, setActiveModal] = useState<number | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <section id="gallery" className="flex py-10">
      {images.map((image, i) => (
        <div key={i}>
          <button onClick={() => setActiveModal(i)}>
            <Image
              src={image.image}
              alt={image.alt || "gallery image"}
              width={600}
              height={1000}
            />
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
    </section>
  );
};

export default Gallery;
