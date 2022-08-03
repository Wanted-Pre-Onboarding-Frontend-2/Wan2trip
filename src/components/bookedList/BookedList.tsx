import React from "react";
import { Hotel } from "types/types";
import Card from "../Card";
import Noreserve from "../../static/image/Noreserve.png";
import VirtualScroll from "common/VirtualScroll";
import BookedWeb from "./BookedWeb";
import BookedTablet from "./BookedTablet";

// TODO: Card list를 감싸는 wrapper div height 수정 -> localHotelData.length를 기준으로 해주면 될듯함
const BookedList = () => {
  return (
    <>
      <div className="lg:block md:hidden sm:hidden">
        <BookedWeb />
      </div>
      <div className="md:block sm:bolck lg:hidden">
        <BookedTablet />
      </div>
    </>
  );
};

export default BookedList;
