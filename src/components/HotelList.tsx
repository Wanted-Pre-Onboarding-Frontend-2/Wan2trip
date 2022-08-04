import React, { Suspense } from "react";
import { uid } from "react-uid";
import Card from "common/Card";
import VirtualScroll from "common/VirtualScroll";
import Spinner from "../static/icons/spinner.png";
import { Hotel } from "types/types";
import { getHotelList } from "api/httpRequest";
import { useInfiniteQuery } from "@tanstack/react-query";

const HotelList = () => {
  const {
    data: hotels,
    isLoading,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
  } = useInfiniteQuery(["infiniteHotelList"], getHotelList, {
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  if (isLoading) {
    return <img src={Spinner} alt="로딩중 스피너" className="animate-spin" />;
  }

  const hotelList: Hotel[] = [];
  hotels?.pages.forEach((page) => {
    hotelList.push(...page.result);
  });
  console.log(hotelList);

  // TODO: NextPage button 대신 무한스크롤 Observer로 변경
  return (
    <>
      <div>홈</div>

      <VirtualScroll itemHeight={20} columnGap={0.625}>
        {hotelList.map((hotel: Hotel, index: number) => (
          <Card key={uid(index)} data={hotel} isBooked={false} />
        ))}
      </VirtualScroll>
      <button onClick={() => fetchNextPage()}>NextPage</button>
    </>
  );
};

export default HotelList;
