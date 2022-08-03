import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import SearchInput from "./SearchInput";
import CalendarInput from "./CalendarInput";
import GuestInput from "./GuestInput";
import { SearchData, PeopleNumber, SearchKeyword } from "../../store/search";
import { useRecoilState, useRecoilValue } from "recoil";
import { useSearchResults } from "../../api/queries";
import { ReactComponent as SearchWhiteIcon } from "../../static/image/SearchWhite.svg";
import { useQueryClient } from "@tanstack/react-query";

const SearchBar = () => {
  const queryClient = useQueryClient();

  // const [searchValue, setSearchInput] = useState("");
  const [removeVisible, setRemoveVisible] = useState(false);
  const [searchData, setSearchData] = useRecoilState(SearchData);
  const [searchKeyword, SetSearchKeyword] = useRecoilState(SearchKeyword);
  const peopleNum = useRecoilValue(PeopleNumber);

  const { status, data, error } = useSearchResults(searchKeyword, peopleNum);
  // useSearchResults(searchValue, PeopleNum)해서 가져온 data -> result페이지에서 쓰임

  const onChangeSearchHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    SetSearchKeyword(event.target.value);

    if (event.target.value !== "") {
      setRemoveVisible(true);
    } else {
      setRemoveVisible(false);
    }
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(data);
    setSearchData(data);
  };

  return (
    <>
      <div className="hidden md:block">
        <form action="" onSubmit={onSubmitHandler}>
          <SearchBox>
            <SearchInner>
              <SearchInput
                value={searchKeyword}
                onChangeHandler={onChangeSearchHandler}
                remove={removeVisible}
              />
              <CalendarInput />
              <GuestInput />
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
              remove={removeVisible}
            />
            <div className="flex flex-col flex-1 px-4 text-center">
              <CalendarInput />
            </div>
            <div className="flex-1">
              <GuestInput />
            </div>
          </div>
        </form>
      </MobileSearch>
    </>
  );
};

export default SearchBar;

const SearchBox = tw.div`
pt-16 z-20 
`;

const SearchInner = tw.div`
flex flex-row items-center relative  pb-[0.1rem] h-16 z-20  box-border`;

const MobileSearch = tw.div`
md:hidden bg-white z-10 w-full py-5 px-3
`;
