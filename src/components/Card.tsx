import React from "react";
import { Hotel } from "types/types";

interface PropsType {
  data: Hotel;
}

const BookedHotels: Hotel[] = [];

const Card = ({ data }: PropsType) => {
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
    <div key={data.hotel_name}>
      <div>호텔 이름: {data.hotel_name}</div>
      <div>기본 인원: {data.occupancy.base}</div>
      <div>최대 인원: {data.occupancy.max}</div>
      <div>평점: {data.rating} / 5</div>
      <div>리뷰: 총 {data.review} 개</div>
      <div>가격: {data.price} 원</div>
      <button onClick={() => HandleClickReserve(data)}>[예약]</button>
      <hr />
    </div>
  );
};

export default Card;
