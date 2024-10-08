"use client";

import React, { useState } from "react";
import { attributes } from "../../../content/gallery.md";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../EmblaCarousel/EmblaCarouselArrowButtons";
import ImageModal from "./ImageModal"; // Import the modal component

interface Image {
  image: string;
  alt: string;
}

const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };

const Gallery = () => {
  const { header, images } = attributes as { header: string; images: Image[] };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Fade()]);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="gallery">
      <h2 className="font-bold text-2xl lg:text-4xl mb-10 text-center md:text-start">
        {header}
      </h2>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {images.map((image, i) => (
              <div key={i} className="embla__slide">
                <img
                  className="w-full object-contain cursor-pointer" // Add cursor-pointer for the image
                  src={image.image}
                  alt={image.alt || "gallery image"}
                  onClick={() => handleImageClick(image)} // Handle image click
                />
              </div>
            ))}
          </div>
          <div className="embla__controls !flex !justify-center">
            <div className="embla__buttons">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        imageSrc={selectedImage?.image || ""}
        altText={selectedImage?.alt || "image"}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Gallery;
