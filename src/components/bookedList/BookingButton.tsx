import React from "react";
import { Hotel } from "types/types";
import { useConfirm } from "../../hooks/useConfirm";
import ConfirmContent from "../../components/result/ConfirmContent";
import { Confirm } from "../../common/Confirm";

interface PropsType {
  newData: Hotel;
  isBooked: boolean;
}

const BookedHotels: Hotel[] = [];

const BookingButton = ({ newData, isBooked }: PropsType) => {
  const { isShown, toggle } = useConfirm();
  const content = <ConfirmContent />;
  console.log(newData);
  const handleClickBooking = (newData: Hotel) => {
    const isExisting = BookedHotels.some(
      (e) => e.hotel_name === newData.hotel_name
    );
    if (isExisting) {
      alert("이미 저장된 호텔입니다.");
      return;
    }
    if (!isExisting) {
      BookedHotels.push(newData);
      localStorage.setItem("hotels", JSON.stringify(BookedHotels));
      toggle();
    }
  };

  const handleClickCancel = () => {
    // TODO: 로컬 스토리지 삭제 로직 들어감
  };

  return (
    <>
      <div>
        {isBooked ? (
          <button
            className="self-end mt-2 text-base w-24 h-8 text-white rounded text-center bg-[#FF375C] hover:shadow-md"
            onClick={handleClickCancel}
          >
            예약 취소
          </button>
        ) : (
          <button
            className="self-end mt-2 text-base w-24 h-8 text-white rounded text-center bg-[#FF375C] hover:shadow-md"
            onClick={() => handleClickBooking(newData)}
          >
            예약 하기
          </button>
        )}
      </div>
      <Confirm
        isShown={isShown}
        hide={toggle}
        modalContent={content}
        headerText="예약 완료!"
        newdata={newData}
      />
    </>
  );
};

export default BookingButton;
