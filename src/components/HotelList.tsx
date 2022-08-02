import React from "react";
import Card from "../components/Card";

import { Hotel } from "types/types";
import { useGetHotels } from "api/queries";

const HotelList = () => {
  const { data: hotels } = useGetHotels();
  const handleClickReserve = (newData: Hotel) => {
    // TODO: local storage 저장 로직 들어갈 예정
  };

  return (
    <>
      <div>홈</div>
      {hotels
        ?.map((hotel: Hotel) => {
          return (
            <div key={hotel.hotel_name}>
              <Card
                data={hotel}
                handleClick={() => {
                  handleClickReserve(hotel);
                }}
              />
            </div>
          );
        })
        .slice(0, 20)}
    </>
  );
};

export default HotelList;
