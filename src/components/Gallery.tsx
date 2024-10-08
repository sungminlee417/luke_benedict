"use client";

import React, { useState } from "react";
import { attributes } from "../../content/gallery.md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarousel/EmblaCarouselArrowButtons";

interface Image {
  image: string;
  alt: string;
}

const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };

const Gallery = () => {
  const { images } = attributes as { images: Image[] };

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Fade()]);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const [activeModal, setActiveModal] = useState<number | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <section id="gallery">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {images.map((image, i) => (
              <div key={i} className="embla__slide">
                <button onClick={() => setActiveModal(i)} className="w-full">
                  <img
                    className="w-full object-contain"
                    src={image.image}
                    alt={image.alt || "gallery image"}
                  />
                </button>

                {/* <input
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
                </div> */}
              </div>
            ))}
          </div>
          <div className="embla__controls">
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
    </section>
  );
};

export default Gallery;
