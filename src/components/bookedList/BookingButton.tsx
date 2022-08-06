import React from "react";
import { Hotel } from "types/types";
import { useConfirm } from "../../hooks/useConfirm";
import ConfirmContent from "../../components/result/ConfirmContent";
import { Confirm } from "../../common/Confirm";
import { useSetRecoilState } from "recoil";
import { IsBookingButton } from "store/global";

interface PropsType {
  newData: Hotel;
  isBooked: boolean;
}

const BookedHotels: Hotel[] = [];

const BOOK_HOTEL = true;
const CANCEL_HOTEL = false;

const BookingButton = ({ newData, isBooked }: PropsType) => {
  const setIsBooking = useSetRecoilState(IsBookingButton);
  const { isShown, toggle } = useConfirm();
  const modalContent = <ConfirmContent {...newData} />;

  const SwitchModalContent = (booking: boolean) => {
    if (booking) {
      setIsBooking(BOOK_HOTEL);
      toggle();
    }
    if (!booking) {
      setIsBooking(CANCEL_HOTEL);
      toggle();
    }
  };

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
      SwitchModalContent(BOOK_HOTEL);
    }
    localStorage.setItem("hotels", JSON.stringify(BookedHotels));
  };

  const handleClickCancel = React.useCallback((targetHotel: Hotel) => {
    const localHotelData = JSON.parse(localStorage.getItem("hotels")!) ?? [];
    const newBookedHotels = localHotelData.filter(
      (hotel: Hotel) => hotel.hotel_name !== targetHotel.hotel_name
    );
    localStorage.setItem("hotels", JSON.stringify(newBookedHotels));
    SwitchModalContent(CANCEL_HOTEL);
  }, []);

  return (
    <>
      <div>
        {isBooked ? (
          <button
            className="self-end mt-2 text-base w-24 h-10 text-white rounded font-bold text-center bg-main hover:shadow-md"
            onClick={() => handleClickCancel(newData)}
          >
            예약 취소
          </button>
        ) : (
          <button
            className="self-end mt-2 text-base w-24 h-10 text-white font-bold rounded text-center bg-main hover:shadow-md"
            onClick={() => handleClickBooking(newData)}
          >
            예약하기
          </button>
        )}
      </div>
      <Confirm
        isShown={isShown}
        hide={toggle}
        modalContent={modalContent}
        headerText="예약 완료!"
      />
    </>
  );
};

export default BookingButton;
