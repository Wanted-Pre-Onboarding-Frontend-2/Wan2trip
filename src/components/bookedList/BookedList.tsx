import React from "react";
import { Hotel } from "types/types";
import Card from "../Card";

const BookedList = () => {
  const localHotelData: any = localStorage.getItem("hotels");

  const getHotelsFromStorage = (localHotelData: any) => {
    if (!localHotelData) {
      return;
    }

    if (localHotelData) {
      const parsedHotelList: any = JSON.parse(localHotelData);
      const hotelList = parsedHotelList.map((hotel: Hotel) => {
        return (
          <div key={hotel.hotel_name}>
            <Card data={hotel} />
          </div>
        );
      });
      return hotelList;
    }
  };

  return (
    <>
      <div>홈</div>
      {localHotelData === null ? (
        <div> 저장된 호텔이 없습니다.</div>
      ) : (
        <div>{getHotelsFromStorage(localHotelData)}</div>
      )}
    </>
  );
};

export default BookedList;
