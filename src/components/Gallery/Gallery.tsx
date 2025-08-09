"use client";

import React, { useState } from "react";
import Image from "next/image";
import { attributes } from "../../../content/gallery.md";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import {
  usePrevNextButtons,
} from "../EmblaCarousel/EmblaCarouselArrowButtons";
import ImageModal from "./ImageModal";

interface GalleryImage {
  image: string;
  alt: string;
}

const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };

const Gallery = () => {
  const { header, images } = attributes as { header: string; images: GalleryImage[] };
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
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: number]: boolean }>({});
  const [modalImageLoading, setModalImageLoading] = useState(false);

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
    const newIndex = selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1;
    setSelectedImageIndex(newIndex);
    setSelectedImage(images[newIndex]);
    setModalImageLoading(true);
    setTimeout(() => setModalImageLoading(false), 200);
  };

  const handleNextImage = () => {
    const newIndex = selectedImageIndex < images.length - 1 ? selectedImageIndex + 1 : 0;
    setSelectedImageIndex(newIndex);
    setSelectedImage(images[newIndex]);
    setModalImageLoading(true);
    setTimeout(() => setModalImageLoading(false), 200);
  };

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => ({ ...prev, [index]: true }));
  };

  // Keyboard navigation for carousel
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft' && !prevBtnDisabled) {
      onPrevButtonClick();
    } else if (event.key === 'ArrowRight' && !nextBtnDisabled) {
      onNextButtonClick();
    } else if (event.key === 'Escape' && isModalOpen) {
      handleCloseModal();
    }
  };

  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
            {header}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        
        <div 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transition-colors max-w-full"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label={`${header} image carousel`}
        >
          <div className="relative">
            <div className="embla overflow-hidden">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container flex">
                  {images.map((image, i) => (
                    <div key={i} className="embla__slide flex-none w-full relative">
                      <div className="relative aspect-video w-full bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden group cursor-pointer" 
                           onClick={() => handleImageClick(image, i)}>
                        <Image
                          src={`/${image.image}`}
                          alt={image.alt || "gallery image"}
                          fill
                          style={{ objectFit: 'contain' }}
                          className="transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                          priority={i === 0}
                          onLoad={() => handleImageLoad(i)}
                        />
                        {!imagesLoaded[i] && (
                          <div className="absolute inset-0 bg-gray-100 dark:bg-gray-700 animate-pulse flex items-center justify-center">
                            <div className="text-gray-400 dark:text-gray-500">Loading...</div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3">
                            <svg className="w-6 h-6 text-neutral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {image.alt && (
                        <div className="mt-4 text-center">
                          <p className="text-sm text-gray-600 dark:text-gray-400 italic">{image.alt}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Modern Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8 px-6 pb-6">
              <button
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary disabled:opacity-30 disabled:hover:bg-gray-100 dark:disabled:hover:bg-gray-700 transition-all duration-200"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-white group-disabled:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {images.findIndex((_, i) => i === (emblaApi?.selectedScrollSnap() || 0)) + 1}
                </span>
                <span className="text-sm text-gray-400 dark:text-gray-500">of</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{images.length}</span>
              </div>
              
              <button
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary disabled:opacity-30 disabled:hover:bg-gray-100 dark:disabled:hover:bg-gray-700 transition-all duration-200"
                aria-label="Next image"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-white group-disabled:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
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
