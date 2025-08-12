"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faPlay } from "@fortawesome/free-solid-svg-icons";
import { attributes } from "../../../content/recordings.md";
import ReactPlayer from "react-player";

interface Recording {
  header: string;
  type: string;
  url: string;
  image?: string;
}

interface VideosData {
  recordings: Recording[];
  videos: {
    header: string;
    description: string;
    maxItems: number;
    showYouTubeChannel: boolean;
    youtubeChannel: string;
    youtubeChannelText: string;
    youtubeChannelSubtext: string;
  };
}

const Videos = () => {
  const { recordings, videos } = attributes as VideosData;
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Filter only video content and limit based on config
  const videoItems = recordings.filter(recording => recording.type === "Video URL").slice(0, videos.maxItems);

  return (
    <section id="videos" className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors">
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {videos.header}
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto"></div>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-8 max-w-2xl mx-auto font-light leading-relaxed">
            {videos.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {videoItems.map((video, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                {isClient && (
                  <div className="aspect-video">
                    <ReactPlayer
                      url={video.url}
                      width="100%"
                      height="100%"
                      light={true}
                      playing={false}
                      controls={true}
                      config={{
                        youtube: {
                          playerVars: { showinfo: 1 }
                        }
                      }}
                    />
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <FontAwesomeIcon icon={faPlay} className="text-xs" />
                  Video
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 leading-tight group-hover:text-primary transition-colors duration-200">
                  {video.header}
                </h3>
                
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faYoutube} className="text-lg" />
                  <span>Watch on YouTube</span>
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {videos.showYouTubeChannel && videos.youtubeChannel && (
          <div className="text-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <a
              href={videos.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
              <div className="text-left">
                <div className="text-lg">{videos.youtubeChannelText}</div>
                <div className="text-sm opacity-90">{videos.youtubeChannelSubtext}</div>
              </div>
              <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm opacity-70" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Videos;