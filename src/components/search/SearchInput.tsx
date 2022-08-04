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
    if (searchRef.current) searchRef.current.value = "";
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
          className="absolute items-center justify-center hidden w-6 h-6  top-5 left-3 md:flex"
        >
          <SearchBlackIcon />
        </label>
        <div className="relative flex flex-row h-full  md:w-auto md:px-12">
          <input
            name="hotel_name"
            id="hotel_name"
            type="text"
            placeholder="호텔명"
            className="flex-1 h-full pl-2 text-sm bg-gray-200 border-0 focus:outline-none md:bg-white rounded-2xl md:rounded-none md:text-md"
            onChange={onChangeHandler}
            value={value}
            ref={searchRef}
          />
          {searchOpen && (
            <button
              type="button"
              className="absolute flex items-center justify-center w-5 h-5 top-4 md:top-5 right-4 "
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
