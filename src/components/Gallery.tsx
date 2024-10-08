"use client";

import React from "react";
import { attributes } from "../../content/gallery.md";

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

  return (
    <section id="gallery">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {images.map((image, i) => (
              <div key={i} className="embla__slide">
                <img
                  className="w-full object-contain"
                  src={image.image}
                  alt={image.alt || "gallery image"}
                />
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
