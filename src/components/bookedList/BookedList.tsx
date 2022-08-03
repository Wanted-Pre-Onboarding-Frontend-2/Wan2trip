import React from "react";
import { Hotel } from "types/types";
import Card from "../Card";
import Noreserve from "../../static/image/Noreserve.png";
import VirtualScroll from "common/VirtualScroll";

// TODO: Card list를 감싸는 wrapper div height 수정 -> localHotelData.length를 기준으로 해주면 될듯함
const BookedList = () => {
  const [localHotelData, setLocalHotelData] = React.useState<Hotel[]>([]);

  React.useEffect(() => {
    const localHotelData = JSON.parse(localStorage.getItem("hotels")!) ?? [];
    setLocalHotelData(localHotelData as Hotel[]);
  }, []);

  return (
    <>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center w-full h-16 py-2 bg-white border-b-4 border-slate-200">
            예약된 내역
          </div>
          <div className="flex w-full h-16 py-2 bg-white rounded cursor-pointer text-slate-500">
            <div className="flex items-center justify-center w-1/3 border-b-2 border-black">
              예정된 예약
            </div>
            <div className="flex justify-center items-center w-1/3  bl-[#FF375C]">
              취소된 예약
            </div>
            <div className="flex justify-center items-center w-1/3  bl-[#FF375C]">
              투숙 완료
            </div>
          </div>
          <div className="flex items-center justify-center w-full py-2 ml-4 bg-white h-[60vh]">
          {!!localHotelData.length && (
            <VirtualScroll itemHeight={300} columnGap={10}>
              {localHotelData.map((hotel, index) => (
                <Card key={index} data={hotel} />
              ))}
            </VirtualScroll>
          )}
          {!!localHotelData.length || (
            <div className="flex flex-col items-center text-center">
              <img src={Noreserve} className="w-20 mb-5" />
              아직 준비된 예약이 없어요. <br />
              함께 새로운 스테이를 찾아봐요.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BookedList;
