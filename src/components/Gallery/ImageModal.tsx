"use client";

import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string;
  altText: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageSrc,
  altText,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full object-contain max-h-[80vh]"
      />

      <button
        className="absolute top-2 right-2 bg-muted w-12 h-12 text-white rounded-full p-2 focus:outline-none"
        onClick={onClose}
      >
        <FontAwesomeIcon icon={faXmark} size="xl" />
      </button>
    </div>
  );
};

export default ImageModal;
