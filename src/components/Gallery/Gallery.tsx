"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { attributes } from "../../../content/gallery.md";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import { usePrevNextButtons } from "../EmblaCarousel/EmblaCarouselArrowButtons";
import ImageModal from "./ImageModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface GalleryImage {
  image: string;
  alt: string;
}

const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };

const Gallery = () => {
  const {
    header,
    description,
    images,
    layout = "carousel",
    showArrows = true,
    showDots = true,
    showCounter = true,
    enableModal = true,
  } = attributes as {
    header: string;
    description?: string;
    images: GalleryImage[];
    layout?: string;
    showArrows?: boolean;
    showDots?: boolean;
    showCounter?: boolean;
    enableModal?: boolean;
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Fade()]);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [modalImageLoading, setModalImageLoading] = useState(false);
  const [controlsHovered, setControlsHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleImageClick = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setSelectedImageIndex(index);
    setModalImageLoading(true);
    setIsModalOpen(true);
    // Simulate loading time for better UX
    setTimeout(() => setModalImageLoading(false), 300);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setModalImageLoading(false);
  };

  const handlePreviousImage = () => {
    const newIndex =
      selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1;
    setSelectedImageIndex(newIndex);
    setSelectedImage(images[newIndex]);
    setModalImageLoading(true);
    setTimeout(() => setModalImageLoading(false), 200);
  };

  const handleNextImage = () => {
    const newIndex =
      selectedImageIndex < images.length - 1 ? selectedImageIndex + 1 : 0;
    setSelectedImageIndex(newIndex);
    setSelectedImage(images[newIndex]);
    setModalImageLoading(true);
    setTimeout(() => setModalImageLoading(false), 200);
  };

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => ({ ...prev, [index]: true }));
  };

  // Track current slide for pagination
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect(); // Set initial slide

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Keyboard navigation for carousel
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft" && !prevBtnDisabled) {
      onPrevButtonClick();
    } else if (event.key === "ArrowRight" && !nextBtnDisabled) {
      onNextButtonClick();
    } else if (event.key === "Escape" && isModalOpen) {
      handleCloseModal();
    }
  };

  return (
    <section id="gallery" className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {header}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          {description && description.trim().length > 0 && (
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-8 max-w-2xl mx-auto font-light leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden h-96">
          <div
            className="relative h-full"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label={`${header} image carousel`}
          >
            <div className="embla h-full">
              <div className="embla__viewport h-full" ref={emblaRef}>
                <div className="embla__container flex h-full">
                  {images.map((image, i) => (
                    <div
                      key={i}
                      className="embla__slide flex-none w-full h-full relative"
                    >
                      <div
                        className="relative w-full h-full bg-white dark:bg-gray-900 overflow-hidden cursor-pointer p-4"
                        onClick={() =>
                          enableModal && handleImageClick(image, i)
                        }
                      >
                        <Image
                          src={`/${image.image}`}
                          alt={image.alt || "gallery image"}
                          fill
                          style={{ objectFit: "contain" }}
                          className="transition-transform duration-300 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={i === 0}
                          onLoad={() => handleImageLoad(i)}
                        />
                        {!imagesLoaded[i] && (
                          <div className="absolute inset-0 bg-white dark:bg-gray-800 animate-pulse flex items-center justify-center">
                            <div className="text-gray-400 dark:text-gray-500 text-sm">
                              Loading...
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                          <div
                            className={`${
                              controlsHovered
                                ? "opacity-0"
                                : "opacity-0 hover:opacity-100"
                            } transition-opacity duration-300 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-3`}
                          >
                            <svg
                              className="w-5 h-5 text-gray-600 dark:text-gray-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            {(showArrows || showCounter) && (
              <div
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200 dark:border-gray-600 z-20"
                onMouseEnter={(e) => {
                  e.stopPropagation();
                  setControlsHovered(true);
                }}
                onMouseLeave={(e) => {
                  e.stopPropagation();
                  setControlsHovered(false);
                }}
              >
                {showArrows && (
                  <button
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:scale-110 disabled:opacity-30 disabled:hover:bg-gray-100 dark:disabled:hover:bg-gray-700 disabled:hover:scale-100 transition-all duration-200"
                    aria-label="Previous image"
                  >
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      className="text-gray-800 dark:text-gray-200"
                      size="sm"
                    />
                  </button>
                )}

                {showCounter && (
                  <div className="flex items-center gap-1 text-xs font-medium text-gray-800 dark:text-gray-200 min-w-[3rem] justify-center">
                    <span className="tabular-nums">{currentSlide + 1}</span>
                    <span className="text-gray-500">/</span>
                    <span className="tabular-nums">{images.length}</span>
                  </div>
                )}

                {showArrows && (
                  <button
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:scale-110 disabled:opacity-30 disabled:hover:bg-gray-100 dark:disabled:hover:bg-gray-700 disabled:hover:scale-100 transition-all duration-200"
                    aria-label="Next image"
                  >
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-gray-800 dark:text-gray-200"
                      size="sm"
                    />
                  </button>
                )}
                </div>
            )}
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        imageSrc={selectedImage ? `/${selectedImage.image}` : ""}
        altText={selectedImage?.alt || "gallery image"}
        onClose={handleCloseModal}
        onPrevious={handlePreviousImage}
        onNext={handleNextImage}
        currentIndex={selectedImageIndex}
        totalImages={images.length}
        isLoading={modalImageLoading}
      />
    </section>
  );
};

export default Gallery;
