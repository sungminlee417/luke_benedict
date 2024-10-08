import React from "react";

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-4 rounded-lg max-w-3xl mx-auto">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full object-contain max-h-[80vh]"
        />
      </div>
      <button
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 focus:outline-none"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default ImageModal;
