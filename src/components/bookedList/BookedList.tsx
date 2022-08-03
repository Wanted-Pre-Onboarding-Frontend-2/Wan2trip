import React from "react";
import { Hotel } from "types/types";
import Card from "../Card";
import Noreserve from "../../static/image/Noreserve.png";
import VirtualScroll from "common/VirtualScroll";
import BookedWeb from "./BookedWeb";
import BookedTablet from "./BookedTablet";

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