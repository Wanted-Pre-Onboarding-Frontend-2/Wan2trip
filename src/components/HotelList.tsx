import React, { useCallback, useEffect, useRef } from "react";
import { uid } from "react-uid";
import Card from "common/Card";
import VirtualScroll from "common/VirtualScroll";
import Spinner from "../static/icons/spinner.png";
import { Hotel } from "types/types";
import { getHotelList } from "api/httpRequest";
import { useInfiniteQuery } from "@tanstack/react-query";

const HotelList = () => {
  const observerElem = useRef(null);
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
  const hotelList: any = [];
  hotels?.pages.forEach((page) => {
    hotelList.push(...page.result);
  });
  console.log(hotelList);

  const handleObserver = useCallback(
    (entries: any) => {
      const target = entries;
      console.log(entries);
      if (target.isIntersecting && isFetchingNextPage) {
        fetchNextPage();
        console.log("next");
      }
    },
    [fetchNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    const element: any = observerElem.current;
    const option = { threshold: 0 };
    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [fetchNextPage, isFetchingNextPage, handleObserver]);

  return (
    <>
      {isLoading ? (
        <img src={Spinner} alt="로딩중 스피너" className="animate-spin" />
      ) : null}

      <VirtualScroll itemHeight={20} columnGap={0.625}>
        {hotelList.map((hotel: Hotel, index: number) => (
          <Card key={uid(index)} data={hotel} isBooked={false} />
        ))}
      </VirtualScroll>
      <div ref={observerElem}></div>
      <button onClick={() => fetchNextPage()}>NextPage</button>
    </>
  );
};

export default HotelList;
