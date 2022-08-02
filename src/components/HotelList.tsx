import React from "react";
import Card from "../components/Card";

import { Hotel } from "types/types";
import { useGetHotels } from "api/queries";

const HotelList = () => {
  const { data: hotels } = useGetHotels();

  return (
    <>
      <div>홈</div>
      {hotels
        .map((hotel: Hotel) => {
          return (
            <div key={hotel.hotel_name} className="w-full">
              <Card data={hotel} />
            </div>
          );
        })
        .slice(0, 20)}
    </>
  );
};

export default HotelList;
