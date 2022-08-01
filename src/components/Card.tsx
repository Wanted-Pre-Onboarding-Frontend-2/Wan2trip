import React from "react";
import { Hotel } from "types/types";
interface PropsType {
  data: Hotel;
  handleClick: any; // FIXME: error  (data: Hotel) => {};
}

const Card = ({ data, handleClick }: PropsType) => {
  return (
    <div key={data.hotel_name}>
      <div>호텔 이름: {data.hotel_name}</div>
      <div>기본 인원: {data.occupancy.base}</div>
      <div>최대 인원: {data.occupancy.max}</div>
      <div>평점: {data.rating} / 5</div>
      <div>리뷰: 총 {data.review} 개</div>
      <div>가격: {data.price} 원</div>
      <button
        onClick={() => {
          handleClick(data);
        }}
      >
        [예약]
      </button>
      <hr />
    </div>
  );
};

export default Card;
