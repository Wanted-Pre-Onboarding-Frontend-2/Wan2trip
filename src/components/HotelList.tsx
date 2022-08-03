import React, { Suspense } from "react";
import { uid } from "react-uid";

import Card from "../components/Card";
import VirtualScroll from "common/VirtualScroll";
import { Hotel } from "types/types";
import { useGetHotels } from "api/queries";

// TODO: Suspense 도입 여부 묻기
// -> 일단 isLoading으로 해둔 상태 (깜빡거리는 현상 발생)
const HotelList = () => {
  const { data: hotels, isLoading } = useGetHotels();

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <div>홈</div>

      <VirtualScroll itemHeight={20} columnGap={0.625}>
        {hotels.map((hotel: Hotel, index: number) => (
          <Card key={uid(index)} data={hotel} />
        ))}
      </VirtualScroll>
    </>
  );
};

export default HotelList;
