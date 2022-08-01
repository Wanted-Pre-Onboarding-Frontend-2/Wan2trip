import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { ReactComponent as SearchWhiteIcon } from "../../static/image/SearchWhite.svg";
import SearchInput from "./SearchInput";
import CalendarInput from "./CalendarInput";
import GuestInput from "./GuestInput";
import axios from "axios";

const SearchBar = () => {
  const [searchValue, setSearchInput] = useState("");

  // 검색 임시 api
  const getSearch = async (keyword: string) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/hotels?q=${keyword}`
      );
      console.log(response.data);
    } catch {}
  };

  const onChangeSearchHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(getSearch(searchValue));
  };

  // useEffect(() => {
  //   console.log(peopleNum);
  // }, []);

  return (
    <form action="" onSubmit={onSubmitHandler}>
      <SearchBox>
        <SearchInner>
          <SearchInput
            value={searchValue}
            onChangeHandler={onChangeSearchHandler}
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
