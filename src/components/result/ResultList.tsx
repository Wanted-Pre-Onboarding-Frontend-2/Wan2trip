import VirtualScroll from "common/VirtualScroll";
import React, { useRef } from "react";
import Card from "../../common/Card";
import { useRecoilValue } from "recoil";
import { PeopleNumber, SearchKeyword } from "store/search";
import { useSearchResults } from "api/queries";
import { Hotel } from "types/types";
import Spinner from "../../static/icons/spinner.png";
import { getHotelList } from "api/httpRequest";
import { useInfiniteQuery } from "@tanstack/react-query";

const ResultList = () => {
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

  const searchKeyword = useRecoilValue(SearchKeyword);
  const numberOfPeople = useRecoilValue(PeopleNumber);
  const { data: searchResults } = useSearchResults(
    searchKeyword,
    numberOfPeople
  );

  const handleObserver = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [hasNextPage, fetchNextPage, isFetchingNextPage]
  );

  React.useEffect(() => {
    const element: any = observerElem.current;
    const option = { threshold: 0 };
    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [fetchNextPage, isFetchingNextPage, handleObserver]);

  return (
    <div>
      {isLoading ? (
        <img
          src={Spinner}
          alt="로딩중 스피너"
          className="flex justify-center animate-spin"
        />
      ) : null}
      {searchResults === undefined || searchResults.length === 0 ? (
        <div>
          <VirtualScroll itemHeight={20} columnGap={0.625}>
            {hotelList?.map((result: Hotel) => {
              return (
                <div key={result.hotel_name} className="w-full">
                  <Card data={result} isBooked={false} />
                </div>
              );
            })}
          </VirtualScroll>
          <div ref={observerElem}></div>
        </div>
      ) : (
        <div>
          <VirtualScroll itemHeight={20} columnGap={0.625}>
            {searchResults?.map((result: Hotel) => {
              return (
                <div key={result.hotel_name} className="w-full">
                  <Card data={result} isBooked={false} />
                </div>
              );
            })}
          </VirtualScroll>
          <div ref={observerElem}></div>
        </div>
      )}
    </div>
  );
};

export default ResultList;
