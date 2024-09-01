import React from "react";
import { attributes } from "../../../../content/upcoming-concerts.md";
import Concert from "./Concert";

const UpcomingConcerts = () => {
  const { concerts } = attributes;
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-center font-bold text-2xl lg:text-4xl">
        Upcoming Concerts
      </h2>
      <ul>
        {concerts.map((concert: any, i: React.Key | null | undefined) => (
          <li key={i}>
            <Concert concert={concert} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UpcomingConcerts;
