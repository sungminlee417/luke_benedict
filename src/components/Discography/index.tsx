"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import DiscographySlide from "./DiscographySlide";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../EmblaCarousel/EmblaCarouselArrowButtons";
import {
  DotButton,
  useDotButton,
} from "../EmblaCarousel/EmblaCarouselDotButton";

const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };
const SLIDES = [
  {
    type: "Video URL",
    url: "https://youtu.be/536i7ij_RS8?feature=shared",
    header: "Grafico de la Petenera",
  },
  {
    type: "Video URL",
    url: "https://www.youtube.com/watch?v=DuvWZ6DD7zc",
    header: "a sense of loss",
  },
];

const Discography = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Fade()]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="bg-primary">
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {SLIDES.map((slide, index) => (
                <div className="embla__slide" key={index}>
                  <DiscographySlide slide={slide} />
                </div>
              ))}
            </div>
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

            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={"embla__dot".concat(
                    index === selectedIndex ? " embla__dot--selected" : ""
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Discography;
