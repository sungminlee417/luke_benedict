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
    <section id="discography" className="section-padding bg-gray-900 dark:bg-gray-800 transition-colors relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
      
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            {discography.header}
          </h2>
          <div className="w-32 h-1.5 bg-white/80 mx-auto rounded-full animate-scale-in"></div>
          <div className="w-16 h-0.5 bg-white/60 mx-auto rounded-full mt-2 animate-scale-in" style={{ animationDelay: "0.2s" }}></div>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-2xl mx-auto font-light">
            {discography.description}
          </p>
        </div>

        <div className={`grid grid-cols-1 ${
          discography.itemsPerRow === 1 ? '' :
          discography.itemsPerRow === 2 ? 'md:grid-cols-2' :
          discography.itemsPerRow === 4 ? 'md:grid-cols-2 lg:grid-cols-4' :
          'md:grid-cols-2 lg:grid-cols-3'
        } gap-8 animate-fade-in`}>
          {musicReleases.map((release, index) => (
            <div 
              key={index}
              className="group bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/20 dark:border-gray-700/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {release.image && (
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={`/${release.image}`}
                    alt={release.header}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white dark:text-gray-100 mb-4 leading-tight">
                  {release.header}
                </h3>
                
                <a
                  href={release.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 group/btn"
                >
                  <FontAwesomeIcon 
                    icon={getIcon(release.url)} 
                    className="text-lg group-hover/btn:scale-110 transition-transform duration-200"
                  />
                  <span>{getPlatformName(release.url)}</span>
                  <FontAwesomeIcon 
                    icon={faExternalLinkAlt} 
                    className="text-sm opacity-70 group-hover/btn:opacity-100 transition-opacity duration-200"
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
