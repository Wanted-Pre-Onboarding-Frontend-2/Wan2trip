import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { ReactComponent as SearchWhiteIcon } from "../../static/image/SearchWhite.svg";
import SearchInput from "./SearchInput";
import CalendarInput from "./CalendarInput";
import GuestInput from "./GuestInput";
import { SearchData, PeopleNumber } from "../../store/search";
import { useRecoilState, useRecoilValue } from "recoil";
import { useSearchResults } from "../../api/queries";

const SearchBar = () => {
  const [searchValue, setSearchInput] = useState("");
  const [removeVisible, setRemoveVisible] = useState(false);
  const [searchData, setSearchData] = useRecoilState(SearchData);
  const peopleNum = useRecoilValue(PeopleNumber);

  const { data } = useSearchResults(searchValue, peopleNum);

  const onChangeSearchHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchInput(event.target.value);

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
                value={searchValue}
                onChangeHandler={onChangeSearchHandler}
                remove={removeVisible}
              />
              <CalendarInput />
              <GuestInput />
              <button
                type="submit"
                className="flex justify-center items-center w-16 h-full rounded-r-md bg-main"
              >
                <SearchWhiteIcon className="w-6 h-6" />
              </button>
            </SearchInner>
          </SearchBox>
        </form>
      </div>
      <MobileSearch className="md:hidden bg-white ">
        <form onSubmit={onSubmitHandler}>
          <div className="flex justify-between items-center ">
            <SearchInput
              value={searchValue}
              onChangeHandler={onChangeSearchHandler}
              remove={removeVisible}
            />
            <div className="flex flex-1 flex-col text-center px-4">
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
md:hidden bg-white absolute z-10 w-full py-5 px-3
`;
