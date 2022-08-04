/* eslint-disable array-callback-return */
/* eslint-disable no-unreachable-loop */
import React, { useRef, useState } from "react";
import tw from "tailwind-styled-components";
import { ReactComponent as SearchBlackIcon } from "../../static/image/SearchBlack.svg";
import { ReactComponent as CancelIcon } from "../../static/image/Cancel.svg";
import { useRecoilState } from "recoil";
import { SearchValue, SearchListOpen } from "../../store/search";

interface SearchProps {
  value: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchList?: string[];
  searchOpen: boolean;
}

const SearchInput = ({
  value,
  onChangeHandler,
  searchList,
  searchOpen,
}: SearchProps) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [, setKeyword] = useRecoilState(SearchValue);
  const [, setSearchListOpen] = useRecoilState(SearchListOpen);

  const onRemoveValue = () => {
    // if (searchRef.current) searchRef.current.value = "";
    setKeyword("");
    setSearchListOpen(false);
  };

  const onClickGetValue = (hotel: string, index: number) => {
    setKeyword(hotel);
    setSearchListOpen(false);
  };

  return (
    <>
      <SearchInputBox>
        <label
          htmlFor="hotel_name"
          className="absolute z-10 items-center justify-center hidden w-6 h-6 top-5 left-4 md:flex"
        >
          <SearchBlackIcon />
        </label>
        <div className="relative overflow-hidden flex flex-row h-full md:w-auto md:px-12 bg-gray-200 md:bg-white rounded-2xl">
          <input
            name="hotel_name"
            id="hotel_name"
            type="text"
            placeholder="호텔명"
            className="flex-1 h-full pl-2 text-sm border-0 bg-gray-200 md:bg-white  focus:outline-none md:text-md"
            onChange={onChangeHandler}
            value={value}
            ref={searchRef}
          />

          <button type="submit" className="absolute top-3 right-5 md:hidden">
            <SearchBlackIcon className="ml-2 w-5 h-5 " />
          </button>

          {searchOpen && (
            <button
              type="button"
              className="absolute flex items-center justify-center w-5 h-5 top-3 md:top-5 right-14 md:right-4 "
              onClick={onRemoveValue}
            >
              <CancelIcon className="w-4 h-4  text-tahiti" />
            </button>
          )}
        </div>
        {searchOpen && (
          <SearchListBox>
            <ul className="overflow-x-hidden overflow-y-auto max-h-56">
              {searchList?.map((hotel: string, index: number) => (
                <li
                  key={hotel + index}
                  className="p-2 cursor-pointer text-sm hover:bg-slate-200"
                  onClick={() => onClickGetValue(hotel, index)}
                >
                  {hotel}
                </li>
              ))}
              {searchList?.length === 0 && (
                <li className="text-sm">검색 결과가 없습니다.</li>
              )}
            </ul>
          </SearchListBox>
        )}
      </SearchInputBox>
    </>
  );
};

export default SearchInput;

const SearchInputBox = tw.div`
w-2/3  md:w-1/3 relative h-12 md:h-full  md:bg-white md:border-r md:border-solid md:border-gray-300  md:rounded-l-md
`;

const SearchListBox = tw.div`
absolute top-18 left-0 p-4 w-80 bg-white shadow-lg rounded`;

const SearchItem = tw.li``;
