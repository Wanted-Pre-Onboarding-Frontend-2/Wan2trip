import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import SearchInput from "./SearchInput";
import CalendarInput from "./CalendarInput";
import GuestInput from "./GuestInput";
import {
  SearchData,
  PeopleNumber,
  SearchKeyword,
  AdultNumber,
  ChildrenNumber,
  SearchValue,
  SearchListOpen,
} from "../../store/search";
import { useRecoilState, useRecoilValue } from "recoil";
import { useGetHotels, useSearchResults } from "../../api/queries";
import { ReactComponent as SearchWhiteIcon } from "../../static/image/SearchWhite.svg";
import { useQueryClient } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "hooks/useSearch";

const SearchBar = () => {
  const queryClient = useQueryClient();
  const location = useLocation();
  const navigate = useNavigate();

  const [searchData, setSearchData] = useRecoilState(SearchData);
  const [searchKeyword, setSearchKeyword] = useRecoilState(SearchKeyword);
  const [keyword, setKeyword] = useRecoilState(SearchValue);

  const adultOfNum: number = useRecoilValue(AdultNumber);
  const childrenOfNum: number = useRecoilValue(ChildrenNumber);
  const [, setPeopleNumber] = useRecoilState(PeopleNumber);
  const peopleNum = Math.floor(adultOfNum + childrenOfNum);

  const { data } = useSearchResults(keyword, peopleNum);
  const { data: hotels } = useGetHotels();
  const { createFuzzyMatcher } = useSearch();
  const [searchList, setSearchList] = useState();
  const [searchListOpen, setSearchListOpen] = useRecoilState(SearchListOpen);

  const onChangeSearchHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    setSearchListOpen(true);
    setKeyword(value);
    if (value !== "") {
      const fuzzyRegex = createFuzzyMatcher(value);

      const strList: string[] | any = [];

      for (const key in hotels) {
        const hotelName: string = hotels[key].hotel_name;

        if (fuzzyRegex.test(hotelName.toLowerCase())) {
          if (hotelName.includes(value)) {
            strList.push(hotelName);
          }
        }
      }

      setSearchList(strList);
    } else {
      setSearchListOpen(false);
    }
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSearchKeyword(keyword);
    setPeopleNumber(peopleNum);
    setSearchData(data);

    if (location.pathname === "/") {
      navigate("/result");
    }
  };

  return (
    <>
      <div className="hidden md:block ">
        <form action="" onSubmit={onSubmitHandler}>
          <SearchBox>
            <SearchInner>
              <SearchInput
                value={keyword}
                onChangeHandler={onChangeSearchHandler}
                searchList={searchList}
                searchOpen={searchListOpen}
              />
              <CalendarInput />
              <GuestInput peopleNum={peopleNum} />
              <button
                type="submit"
                className="flex items-center justify-center w-16 h-full rounded-r-md bg-main"
              >
                <SearchWhiteIcon className="w-6 h-6" />
              </button>
            </SearchInner>
          </SearchBox>
        </form>
      </div>
      <MobileSearch className="bg-white md:hidden ">
        <form onSubmit={onSubmitHandler}>
          <div className="flex items-center justify-between ">
            <SearchInput
              value={searchKeyword}
              onChangeHandler={onChangeSearchHandler}
              searchList={searchList}
              searchOpen={searchListOpen}
            />
            <div className="flex flex-col flex-1 px-4 text-center">
              <CalendarInput />
            </div>
            <div className="flex-1">
              <GuestInput peopleNum={peopleNum} />
            </div>
          </div>
        </form>
      </MobileSearch>
    </>
  );
};

export default SearchBar;

const SearchBox = tw.div`
mt-16 z-20 md:px-3 lg:px-0 border-gray-300	border rounded-md
`;

const SearchInner = tw.div`
flex flex-row items-center relative h-16 z-20  box-border`;

const MobileSearch = tw.div`
 fixed top-17 left-0 bg-white z-10 w-full md:hidden px-3 py-5
`;
