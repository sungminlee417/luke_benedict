"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { attributes } from "../../../content/recordings.md";

interface Recording {
  header: string;
  type: string;
  url: string;
  image?: string;
}

const Discography = () => {
  const { recordings, discography } = attributes as { 
    recordings: Recording[];
    discography: {
      header: string;
      description: string;
      itemsPerRow: number;
    };
  };
  
  // Filter only music releases (albums/songs)
  const musicReleases = recordings.filter(recording => recording.type === "Image Link");

  const getIcon = (url: string) => {
    if (url.includes('spotify.com')) {
      return faSpotify;
    }
    return faExternalLinkAlt;
  };

  const getPlatformName = (url: string) => {
    if (url.includes('spotify.com')) {
      return 'Listen on Spotify';
    }
    return 'Listen Now';
  };

  return (
    <section id="discography" className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {discography.header}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-8 max-w-2xl mx-auto font-light">
            {discography.description}
          </p>
        </div>

        <div className={`grid grid-cols-1 ${
          discography.itemsPerRow === 1 ? '' :
          discography.itemsPerRow === 2 ? 'md:grid-cols-2' :
          discography.itemsPerRow === 4 ? 'md:grid-cols-2 lg:grid-cols-4' :
          'md:grid-cols-2 lg:grid-cols-3'
        } gap-8`}>
          {musicReleases.map((release, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {release.image && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={`/${release.image}`}
                    alt={release.header}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
                  {release.header}
                </h3>
                
                <a
                  href={release.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold transition-colors duration-200"
                >
                  <FontAwesomeIcon 
                    icon={getIcon(release.url)} 
                    className="text-lg"
                  />
                  <span>{getPlatformName(release.url)}</span>
                  <FontAwesomeIcon 
                    icon={faExternalLinkAlt} 
                    className="text-sm opacity-70"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discography;
