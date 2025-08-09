"use client";

import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string;
  altText: string;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  currentIndex?: number;
  totalImages?: number;
  isLoading?: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageSrc,
  altText,
  onClose,
  onPrevious,
  onNext,
  currentIndex,
  totalImages,
  isLoading = false,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          if (onPrevious) onPrevious();
          break;
        case "ArrowRight":
          if (onNext) onNext();
          break;
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
      // Focus trap
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onPrevious, onNext]);

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === modalRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
        onClick={onClose}
        aria-label="Close image viewer"
      >
        <FontAwesomeIcon icon={faXmark} size="lg" />
      </button>

      {/* Image counter */}
      {currentIndex !== undefined && totalImages !== undefined && (
        <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-3 py-2 rounded-full text-sm font-medium">
          {currentIndex + 1} / {totalImages}
        </div>
      )}

      {/* Navigation arrows */}
      {onPrevious && (
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-4 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
          onClick={onPrevious}
          aria-label="Previous image"
        >
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </button>
      )}

      {onNext && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-4 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
          onClick={onNext}
          aria-label="Next image"
        >
          <FontAwesomeIcon icon={faChevronRight} size="lg" />
        </button>
      )}

      {/* Main image container */}
      <div
        ref={imageRef}
        className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={imageSrc}
              alt={altText}
              width={1200}
              height={800}
              className="object-contain max-w-full max-h-full rounded-lg shadow-2xl animate-slide-up"
              priority
              unoptimized
            />

            {/* Image caption */}
            {altText && altText !== "gallery image" && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
                <p className="text-white text-center text-sm font-medium">
                  {altText}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/50 text-white px-4 py-2 rounded-full text-xs opacity-75">
        <span className="hidden sm:inline">Use arrow keys to navigate • ESC to close</span>
        <span className="sm:hidden">Tap arrows to navigate • Tap X to close</span>
      </div>
    </div>
  );
};

export default ImageModal;
