import VirtualScroll from "common/VirtualScroll";
import React from "react";
import Card from "../Card";
import { useRecoilValue } from "recoil";
import { PeopleNumber, SearchKeyword } from "store/search";
import { useSearchResults } from "api/queries";
import { Hotel } from "types/types";

const ResultList = () => {
  const searchKeyword = useRecoilValue(SearchKeyword);
  const numberOfPeople = useRecoilValue(PeopleNumber);

  const { data: searchResults } = useSearchResults(
    searchKeyword,
    numberOfPeople
  );
  console.log("searchResults", searchResults);

  const getResultsList = () => {
    searchResults?.map((result: Hotel) => {
      return (
        <div key={result.hotel_name} className="w-full">
          <Card data={result} />
        </div>
      );
    });
  };

  return (
    <div>
      {searchResults === undefined ? (
        <div>검색 결과가 없습니다. </div>
      ) : (
        <div>
          {searchResults?.map((result: Hotel) => {
            return (
              <div key={result.hotel_name} className="w-full">
                <Card data={result} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ResultList;
