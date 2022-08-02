import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { ReactComponent as SearchWhiteIcon } from "../../static/image/SearchWhite.svg";
import SearchInput from "./SearchInput";
import CalendarInput from "./CalendarInput";
import GuestInput from "./GuestInput";
import axios from "axios";
import { SearchData } from "../../store/search";
import { useRecoilState } from "recoil";

const SearchBar = () => {
  const [searchValue, setSearchInput] = useState("");
  const [removeVisible, setRemoveVisible] = useState(false);
  const [searchData, setSearchData] = useRecoilState(SearchData);

  // 검색 임시 api
  const getSearch = async (keyword: string) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/hotels?q=${keyword}`
      );
      return response.data;
    } catch {}
  };

  const onChangeSearchHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.value);
    setSearchInput(event.target.value);

    if (event.target.value !== "") {
      setRemoveVisible(true);
    } else {
      setRemoveVisible(false);
    }
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchData(await getSearch(searchValue));
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
