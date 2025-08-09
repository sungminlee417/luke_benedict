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
      className="section-padding bg-white"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
            Upcoming Concerts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concerts.map((concert: Concert, i: React.Key | null | undefined) => (
            <div key={i} className="animate-fade-in" style={{ animationDelay: `${(i as number) * 0.1}s` }}>
              <Concert concert={concert} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingConcerts;
