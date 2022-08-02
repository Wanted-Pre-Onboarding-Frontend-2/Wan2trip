import React from "react";
import { Hotel } from "types/types";

interface PropsType {
  data: Hotel;
}

const IMAGE_URL =
  "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80";

const BookedHotels: Hotel[] = [];

const Card = ({ data }: PropsType) => {
  const priceToString = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const HandleClickReserve = (newData: Hotel) => {
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
      console.log(BookedHotels);
    }
  };
  return (
    <div
      key={data.hotel_name}
      className="flex justify-between w-full max-w-7xl	h-80 m-2.5 rounded-lg border-slate-300 drop-shadow-md bg-white	"
    >
      <section className="flex w-3/5 border-slate-800 ">
        <div className="mr-1 ">
          {/* <img src={data.image} alt='hotel_image' /> */}
          <img
            src={IMAGE_URL}
            alt="hotel_image"
            className="bg-cover rounded-l-lg h-80"
          />
        </div>
        <div className="mt-10 h-1/2">
          <h2 className="text-2xl font-bold">{data.hotel_name}</h2>
          <p className="text-slate-600">{data.address}</p>
          <div className="mt-3 mb-5 ">
            <span>평점: {data.rating} / 5 </span>
            <span> 총 {data.review} 건의 리뷰</span>
          </div>
          <p>기본 인원: {data.occupancy.base}</p>
          <p>최대 인원: {data.occupancy.max}</p>
        </div>
      </section>
      <section className="self-end text-end m-3.5">
        <p className="m-0 text-4xl">{priceToString(data.price)} 원</p>
        <p className="text-xs text-slate-400 ">세금 및 수수료 불포함</p>
        <button onClick={() => HandleClickReserve(data)}>예약 하기</button>
      </section>
    </div>
  );
};

export default Card;
