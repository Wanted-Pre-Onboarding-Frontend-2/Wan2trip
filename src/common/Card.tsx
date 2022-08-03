import React from "react";
import { Hotel } from "types/types";

const Card = ({ hotel }: { hotel: Hotel }) => {
  return (
    <>
      <div
        className="w-full bg-red-300"
        style={{
          height: "300px",
          margin: "10px",
        }}
      >
        {JSON.stringify(hotel.hotel_name)}
      </div>
    </>
  );
};

export default Card;
