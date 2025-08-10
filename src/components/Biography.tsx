"use client";

import React, { useState } from "react";
import Image from "next/image";
import { attributes } from "../../content/biography.md";

interface Paragraph {
  text: string;
}

interface AboutPageAttributes {
  image: string;
  header: string;
  paragraphs: Paragraph[];
}

const Biography = () => {
  const { image, header, paragraphs } = attributes as AboutPageAttributes;
  const [isExpanded, setIsExpanded] = useState(false);

  // Show only first 2 paragraphs initially
  const shouldTruncate = paragraphs.length > 2;
  const displayedParagraphs = isExpanded ? paragraphs : paragraphs.slice(0, 2);

  return (
    <section
      id="biography"
      className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-start">
          <div className="lg:w-1/2 lg:sticky lg:top-20 animate-slide-in-left">
            <div className="relative group lg:max-w-md lg:mx-auto">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-1000 animate-float"></div>
              <div className="relative">
                <Image
                  src={image}
                  alt="Picture of Luke Benedict"
                  width={800}
                  height={800}
                  className="relative rounded-3xl shadow-2xl w-full h-auto max-h-[75vh] lg:max-h-[80vh] object-cover transform transition-all duration-700 group-hover:scale-[1.03] group-hover:shadow-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-8 animate-slide-in-right min-h-screen lg:min-h-[120vh]">
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                {header}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full animate-scale-in"></div>
            </div>
            <article className="space-y-6">
              <div
                className={`transition-all duration-500 ease-in-out ${
                  isExpanded ? "max-h-none" : "max-h-full"
                } overflow-hidden`}
              >
                {displayedParagraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light tracking-wide animate-slide-up mb-6"
                    style={{ animationDelay: `${0.1 * (i + 1)}s` }}
                  >
                    {paragraph.text}
                  </p>
                ))}
              </div>

              {shouldTruncate && (
                <div className="pt-4">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold transition-colors duration-200 group"
                  >
                    <span>{isExpanded ? "Read less" : "Read more"}</span>
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
            <div
              className="pt-6 animate-slide-up"
              style={{ animationDelay: `${0.1 * (paragraphs.length + 2)}s` }}
            >
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent"></div>
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
