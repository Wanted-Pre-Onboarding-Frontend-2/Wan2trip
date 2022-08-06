import React from "react";
import { Hotel } from "types/types";

const CancellationModal = (newData: Hotel, isBooked: boolean) => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-10 pb-5 text-center border-b">
      <p className="text-2xl">{newData.hotel_name}</p>
      <p className="text-gray-400">{newData.address}</p>
      {isBooked ? (
        // 예약 취소
        <div>
          <div className="mt-5 text-sm tracking-wider">
            <p>예약 내역에서 삭제하시겠습니까?</p>
          </div>
          <button> 확인 </button> <button> 취소 </button>
        </div>
      ) : (
        // 예약 하기
        <div>
          <div className="mt-5 text-sm tracking-wider">
            <p>저장되었습니다.</p>
            <p>예약 페이지로 이동하시겠습니까?</p>
          </div>
          <button> 이동 </button> <button> 취소 </button>
        </div>
      )}
    </div>
  );
};

export default CancellationModal;
/*

        <div>
          <div className="mt-5 text-sm tracking-wider">
            <p>예약 내역에서 삭제하시겠습니까?</p>
          </div>
          <button> 확인 </button> <button> 취소 </button>
        </div>
*/
