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
import { attributes } from "../../../content/recordings.md";
import { StaticImageData } from "next/image";

interface Recording {
  header: string;
  type: string;
  url: string;
  image?: StaticImageData;
}

const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };

const Discography = () => {
  const { recordings } = attributes as { recordings: Recording[] };

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
    <div id="discography" className="bg-primary dark:bg-gray-800 transition-colors">
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {recordings.map((recording, index) => (
                <div className="embla__slide" key={index}>
                  <DiscographySlide slide={recording} />
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
