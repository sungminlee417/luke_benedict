import React from "react";
import { attributes } from "../../../content/upcoming-concerts.md";
import Concert from "./Concert";

interface Concert {
  title: string;
  datetime: string;
  address: string;
  ticketLink: string;
}

const UpcomingConcerts = () => {
  const { concerts } = attributes as { concerts: Concert[] };
  return (
    <section
      id="concerts"
      className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/1 via-transparent to-secondary/1"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Upcoming Concerts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto animate-scale-in"></div>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-8 max-w-2xl mx-auto font-light leading-relaxed">
            Join Luke Benedict for his upcoming performances and musical events
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concerts.map((concert: Concert, i: React.Key | null | undefined) => (
            <div
              key={i}
              className="animate-slide-up"
              style={{ animationDelay: `${(i as number) * 0.15}s` }}
            >
              <Concert concert={concert} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingConcerts;
