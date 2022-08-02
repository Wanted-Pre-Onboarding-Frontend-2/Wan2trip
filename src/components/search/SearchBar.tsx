import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { ReactComponent as SearchWhiteIcon } from "../../static/image/SearchWhite.svg";
import SearchInput from "./SearchInput";
import CalendarInput from "./CalendarInput";
import GuestInput from "./GuestInput";
import { SearchData, PeopleNumber } from "../../store/search";
import { useRecoilState, useRecoilValue } from "recoil";
import { useQueryClient } from "@tanstack/react-query";
import { useSearchResults } from "../../api/queries";

const SearchBar = () => {
  const queryClient = useQueryClient();

  const [searchValue, setSearchInput] = useState("");
  const [removeVisible, setRemoveVisible] = useState(false);
  const [searchData, setSearchData] = useRecoilState(SearchData);
  const peopleNum = useRecoilValue(PeopleNumber);

  const { status, data, error } = useSearchResults(searchValue, peopleNum);

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
  );
};

export default SearchBar;

const SearchBox = tw.div`
pt-16 z-20 
`;

const SearchInner = tw.div`
flex flex-row items-center relative md:mx-[2rem] pb-[0.1rem] h-16 z-20  box-border`;
