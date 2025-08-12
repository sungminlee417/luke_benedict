"use client";

import React, { useState } from "react";
import Image from "next/image";
import { attributes } from "../../content/biography.md";
import { truncateContent } from "../utils/textUtils";

interface AboutPageAttributes {
  image: string;
  imageDescription?: string;
  header: string;
  content: string;
  imagePosition?: string;
  imageSize?: string;
  stickyImage?: boolean;
  showReadMore?: boolean;
  readMoreLimit?: number;
  backgroundColor?: string;
}

const Biography = () => {
  const { 
    image, 
    imageDescription,
    header, 
    content, 
    imagePosition = "left",
    imageSize = "large",
    stickyImage = true,
    showReadMore = true,
    readMoreLimit = 2,
    backgroundColor = "gradient"
  } = attributes as AboutPageAttributes;
  const [isExpanded, setIsExpanded] = useState(false);
  const [buttonText, setButtonText] = useState("Read more");
  
  const handleToggle = () => {
    if (isExpanded) {
      // Collapsing: change button text immediately, then collapse
      setButtonText("Read more");
      setTimeout(() => setIsExpanded(false), 50);
    } else {
      // Expanding: expand first, then change button text
      setIsExpanded(true);
      setTimeout(() => setButtonText("Read less"), 400);
    }
  };

  // Use utility function to handle text processing
  const { shouldTruncate, full } = truncateContent(content, readMoreLimit);
  
  // Only show read more if enabled and should truncate
  const showReadMoreButton = showReadMore && shouldTruncate;

  return (
    <section
      id="biography"
      className="section-padding bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto">
        <div className={`flex flex-col ${imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:items-start`}>
          <div className={`lg:w-1/2 ${stickyImage ? 'lg:sticky lg:top-20' : ''}`}>
            <div className="relative lg:max-w-md lg:mx-auto">
              <Image
                src={image}
                alt={imageDescription || "Picture of Luke Benedict"}
                width={800}
                height={800}
                className={`w-full h-auto ${
                  imageSize === 'small' ? 'max-h-[50vh] lg:max-h-[60vh]' : 
                  imageSize === 'medium' ? 'max-h-[60vh] lg:max-h-[70vh]' : 
                  'max-h-[75vh] lg:max-h-[80vh]'
                } object-cover rounded-lg shadow-lg`}
              />
            </div>
          </div>
          <div className="lg:w-1/2 space-y-8">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {header}
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full"></div>
            </div>
            <article className="space-y-6">
              <div className="relative">
                <div className={`transition-all duration-300 ease-in-out ${
                  isExpanded ? 'max-h-none' : 'max-h-[300px]'
                } ${!isExpanded ? 'overflow-hidden' : ''}`}>
                  {full.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {!isExpanded && showReadMoreButton && (
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
                )}
              </div>

              {showReadMoreButton && (
                <div className="pt-4">
                  <button
                    onClick={handleToggle}
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold transition-colors duration-200"
                  >
                    <span>{buttonText}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </article>
            <div className="pt-6">
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                <div className="w-12 h-px bg-primary"></div>
                <span className="text-sm font-medium uppercase tracking-wider">
                  Composer & Pianist
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
