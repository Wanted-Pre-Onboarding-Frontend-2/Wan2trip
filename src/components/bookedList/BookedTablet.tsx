import React from "react";
import { Hotel } from "types/types";
import Card from "../Card";
import Noreserve from "../../static/image/Noreserve.png";

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
      {localHotelData === null ? (
        <div className="flex h-full">
          <div className="flex flex-col w-1/4 h-40 py-2 bg-white rounded cursor-pointer">
            <div className="flex items-center w-full h-1/3 border-l-4 border-[#FF375C] bg-[#FEEEF1] pl-6 ">
              예정된 예약
            </div>
            <div className="flex items-center w-full h-1/3 bl-[#FF375C] pl-6">
              취소된 예약
            </div>
            <div className="flex items-center w-full h-1/3 bl-[#FF375C] pl-6">
              투숙 완료
            </div>
          </div>
          <div className="flex items-center justify-center w-3/4 py-2 ml-4 bg-white h-[60vh]">
            <div className="flex flex-col items-center text-center">
              <img src={Noreserve} className="w-20 mb-5" />
              아직 준비된 예약이 없어요. <br />
              함께 새로운 스테이를 찾아봐요.
            </div>
          </div>
        </div>
      ) : (
        <div>{getHotelsFromStorage(localHotelData)}</div>
      )}
    </>
  );
};

export default BookedList;
