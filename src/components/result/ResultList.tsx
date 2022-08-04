import VirtualScroll from "common/VirtualScroll";
import React from "react";
import Card from "../../common/Card";
import { useRecoilValue } from "recoil";
import { PeopleNumber, SearchKeyword } from "store/search";
import { useSearchResults } from "api/queries";
import { Hotel } from "types/types";
import Noreserve from "../../static/image/Noreserve.png";

const ResultList = () => {
  const searchKeyword = useRecoilValue(SearchKeyword);
  const numberOfPeople = useRecoilValue(PeopleNumber);

  const { data: searchResults } = useSearchResults(
    searchKeyword,
    numberOfPeople
  );

  return (
    <div>
      {searchResults === undefined || searchResults.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <img src={Noreserve} alt="예약없음" className="mb-10 w-28" />
          <div>검색 결과가 없습니다.</div>
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
        </div>
      )}
    </div>
  );
};

export default ResultList;
