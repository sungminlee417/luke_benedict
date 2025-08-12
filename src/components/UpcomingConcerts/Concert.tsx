import { formatDateTime } from "@/helperFunctions/format";
import React from "react";

interface ConcertProps {
  concert: {
    title: string;
    datetime: string;
    address: string;
    ticketLink: string;
  };
}

const Concert = ({ concert }: ConcertProps) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Concert</span>
        </div>
        <h3 className="text-xl font-bold text-neutral dark:text-gray-200 mb-3 leading-tight">{concert.title}</h3>
        <div className="space-y-3 mb-6">
          <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {concert.address}
          </p>
          <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2 font-medium">
            <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formatDateTime(concert.datetime)}
          </p>
        </div>
        <div>
          <a
            className="inline-block bg-primary hover:bg-primary/90 text-white w-full text-center rounded-lg py-3 font-semibold transition-colors duration-200"
            href={concert.ticketLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Purchase Tickets
          </a>
        </div>
      </div>
    </div>
  );
};

export default Concert;
