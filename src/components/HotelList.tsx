import React from "react";
import { uid } from "react-uid";
import Card from "common/Card";
import VirtualScroll from "common/VirtualScroll";
import Spinner from "../static/icons/spinner.png";
import { Hotel } from "types/types";
import { changeInfiniteScrollDataToArray } from "../utils/changeInfiniteScrollDataToArray";
import { useGetHotelList } from "api/queries";

const HotelList = () => {
  const observationTarget = React.useRef<HTMLImageElement>(null);
  const {
    data: hotels,
    isFetchingNextPage,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useGetHotelList();

  const hotelList = changeInfiniteScrollDataToArray(hotels) as Hotel[];

  const handleObserver = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [hasNextPage, fetchNextPage, isFetchingNextPage]
  );

  // TODO: observationTarget과 handleObserver를 인자로 받아 처리하는 useInfiniteScroll 훅 생성
  React.useEffect(() => {
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
          <VirtualScroll itemHeight={20} columnGap={1.25} renderAhead={10}>
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
