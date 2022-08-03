import React from "react";
import { Hotel } from "types/types";
import Card from "../Card";
import Noreserve from "../../static/image/Noreserve.png";
import VirtualScroll from "common/VirtualScroll";

const BookedList = () => {
  const [localHotelData, setLocalHotelData] = React.useState<Hotel[]>([]);

  React.useEffect(() => {
    const localHotelData = JSON.parse(localStorage.getItem("hotels")!) ?? [];
    setLocalHotelData(localHotelData as Hotel[]);
  }, []);

  return (
    <>
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
        {!!localHotelData.length && (
          <div className="flex items-center justify-center w-3/4 py-2 mx-4 bg-white">
            <div className="flex flex-col items-center text-center">
              <VirtualScroll itemHeight={300} columnGap={10}>
                {localHotelData.map((hotel, index) => (
                  <Card key={index} data={hotel} />
                ))}
              </VirtualScroll>
            </div>
          </div>
        )}
        {!!localHotelData.length || (
          <div className="flex items-center justify-center w-3/4 py-2 ml-4 bg-white h-[60vh]">
            <div className="flex flex-col items-center text-center">
              <img src={Noreserve} className="w-20 mb-5" />
              아직 준비된 예약이 없어요. <br />
              함께 새로운 스테이를 찾아봐요.
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BookedList;
