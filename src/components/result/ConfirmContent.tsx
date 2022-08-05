import React from "react";
import { Hotel } from "types/types";

const Confirm = (newdata: Hotel) => {
  // console.log(newdata);
  return (
    <>
      <div className="pt-10 border-b w-full pb-5 justify-center items-center flex flex-col text-center">
        <p className="text-2xl">{newdata.hotel_name}</p>
        <p className="text-gray-400">{newdata.address}</p>
        <div className="text-sm tracking-wider mt-5">
          <div>저장되었습니다.</div>
          <div>예약 페이지로 이동하시겠습니까?</div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
