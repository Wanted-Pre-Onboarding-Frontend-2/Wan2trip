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
      toggle();
    }
    localStorage.setItem("hotels", JSON.stringify(BookedHotels));
  };

  const handleClickCancel = React.useCallback((targetHotel: Hotel) => {
    const localHotelData = JSON.parse(localStorage.getItem("hotels")!) ?? [];
    const newBookedHotels = localHotelData.filter(
      (hotel: Hotel) => hotel.hotel_name !== targetHotel.hotel_name
    );
    localStorage.setItem("hotels", JSON.stringify(newBookedHotels));
  }, []);

  return (
    <>
      <div>
        {isBooked ? (
          <button
            className="self-end mt-2 text-base w-24 h-8 text-white rounded text-center bg-[#FF375C] hover:shadow-md"
            onClick={() => handleClickCancel(newData)}
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
