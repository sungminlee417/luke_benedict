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
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h3 className="card-title">{concert.title}</h3>
        <p>{concert.address}</p>
        <p>{formatDateTime(concert.datetime)}</p>
        <div className="card-actions justify-end mt-2">
          <a
            className="btn btn-primary"
            href={concert.ticketLink}
            target="_blank"
          >
            Purchase Tickets
          </a>
        </div>
      </div>
    </div>
  );
};

export default Concert;
