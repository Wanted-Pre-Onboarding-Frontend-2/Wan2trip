import React, { useState } from "react";
import VirtualScroll from "common/VirtualScroll";
import Tag from "./Tag";
import Sort from "./Sort";
import Card from "../../common/Card";

// TODO: fetch 데이터로 변경
const DUMMY_DATA = [
  {
    hotel_name: "에코랜드 호텔",
    occupancy: {
      base: 2,
      max: 3,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 320337,
    review: 1807,
    rating: 1,
  },
];

const ResultMobile = () => {
  const [isMapActive, setIsMapActive] = useState(true);
  return (
    <div className="bg-white">
      <Tag />
      <div className="border-black px-50">
        <div className="h-4">
          <Sort />
        </div>
      </div>
      {isMapActive ? (
        <div className="">
          <div className="flex-col items-center justify-center max-w-3xl gap-10 pt-10 mx-auto">
            {/* <VirtualScroll itemHeight={20} columnGap={0.625}>
                {DUMMY_DATA.map((hotel, index) => (
                  <Card key={`${hotel}-${index}`} hotel={hotel} />
                ))}
              </VirtualScroll> */}
          </div>
        </div>
      ) : (
        <div className="">지도API?</div>
      )}
    </div>
  );
};
export default ResultMobile;
