import React from "react";
import { Hotel } from "types/types";
import BookingButton from "../components/bookedList/BookingButton";
import { priceToString } from "../utils/priceToString";

interface PropsType {
  data: Hotel;
  isBooked: boolean;
}

const IMAGE_URL =
  "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80";

const BookedHotels: Hotel[] = [];

const Card = ({ data, isBooked }: PropsType) => {
  return (
    <div
      key={data.hotel_name}
      className="flex justify-between w-full mb-5 bg-white rounded-lg max-w-7xl h-80 border-slate-300 drop-shadow-md "
    >
      <div className="mr-1">
        <img
          src={IMAGE_URL}
          alt="hotel_image"
          className="bg-cover rounded-l-lg h-80"
        />
      </div>
      <section className="flex flex-col w-full ml-2 mr-6 mt-9 h-1/2">
        <h2 className="text-2xl font-bold">{data.hotel_name}</h2>
        <p className="text-slate-600">{data.address}</p>
        <div className="mt-3 mb-5 ">
          <span>평점: {data.rating} / 5 </span>
          <span> 총 {data.review} 건의 리뷰</span>
        </div>
        <p>기본 인원: {data.occupancy.base}</p>
        <p>최대 인원: {data.occupancy.max}</p>
        <div className="self-end m-0 mt-5 text-4xl text-end">
          <p>{priceToString(data.price)} 원</p>
          <p className="text-xs text-slate-400">세금 및 수수료 불포함</p>
          <BookingButton newData={data} isBooked={isBooked} />
        </div>
      </section>
    </div>
  );
};

export default Card;
