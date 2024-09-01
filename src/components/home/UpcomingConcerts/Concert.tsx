import React from "react";

const Concert = ({ concert }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h3 className="card-title">{concert.title}</h3>
        <p>{concert.address}</p>
        <p>{concert.datetime}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Purchase Tickets</button>
        </div>
      </div>
    </div>
  );
};

export default Concert;
