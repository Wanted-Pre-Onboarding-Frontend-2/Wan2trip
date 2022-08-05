import React, { useCallback, useEffect, useRef } from "react";
import { uid } from "react-uid";
import Card from "common/Card";
import VirtualScroll from "common/VirtualScroll";
import Spinner from "../static/icons/spinner.png";
import { Hotel } from "types/types";
import { getHotelList } from "api/httpRequest";
import { useInfiniteQuery } from "@tanstack/react-query";
// import { changeInfiniteScrollDataToArray } from "utils/spreadArrays";

const HotelList = () => {
  const observerElem = useRef(null);
  const {
    data: hotels,
    isLoading,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(["infiniteHotelList"], getHotelList, {
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
  const hotelList: any = [];
  hotels?.pages.forEach((page) => {
    hotelList.push(...page.result);
  });

  const observationTarget = React.useRef<HTMLImageElement>(null);
  const handleObserver = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [hasNextPage, fetchNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    const target = observationTarget.current as HTMLImageElement;
    if (!target) return;

    const option = { threshold: 0 };
    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(target);
    return () => observer.unobserve(target);
  }, [handleObserver]);

  return (
    <>
      {isLoading && (
        <img src={Spinner} alt="로딩중 스피너" className="animate-spin" />
      )}
      {isLoading || (
        <>
          <VirtualScroll itemHeight={20} columnGap={0.625} renderAhead={10}>
            {hotelList.map((hotel: Hotel, index: number) => (
              <Card key={uid(index)} data={hotel} isBooked={false} />
            ))}
          </VirtualScroll>
          <img
            ref={observationTarget}
            src={Spinner}
            alt="로딩중 스피너"
            className="animate-spin"
          />
        </>
      )}
    </>
  );
};

export default HotelList;
