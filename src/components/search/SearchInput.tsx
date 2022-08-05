/* eslint-disable array-callback-return */
/* eslint-disable no-unreachable-loop */
import React, { useRef, useState } from "react";
import tw from "tailwind-styled-components";
import { ReactComponent as SearchBlackIcon } from "../../static/image/SearchBlack.svg";
import { ReactComponent as CancelIcon } from "../../static/image/Cancel.svg";
import { useRecoilState, useSetRecoilState } from "recoil";
import { SearchValue, SearchListOpen } from "../../store/search";
import Dropdown from "./dropdown/Dropdown";
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
  const [isInputFocused, setIsInputFocused] = useState(false);
  const setKeyword = useSetRecoilState(SearchValue);
  const setSearchDropdownOpen = useSetRecoilState(SearchListOpen);

  const onRemoveValue = () => {
    setKeyword("");
    setSearchDropdownOpen(false);
  };

  const handleInputFocused = () => {
    setIsInputFocused((current) => !current);
  };
  React.useEffect(() => {}, [isInputFocused]);

  return (
    <>
      <SearchInputBox>
        <label
          htmlFor="hotel_name"
          className="absolute z-10 items-center justify-center hidden w-6 h-6 top-5 left-4 md:flex"
        >
          <SearchBlackIcon />
        </label>
        <div className="relative flex flex-row h-full overflow-hidden md:w-auto md:px-12 rounded-2xl md:rounded-none ">
          <input
            name="hotel_name"
            id="hotel_name"
            type="text"
            placeholder="호텔명"
            className="flex-1 h-full pl-2 text-sm bg-gray-200 border-0 md:bg-white focus:outline-none md:text-md"
            onChange={onChangeHandler}
            onFocus={handleInputFocused}
            // onBlur={handleInputFocused}
            value={value}
            ref={searchRef}
            autoComplete="off"
          />

          <button
            type="submit"
            className="absolute right-0 w-10 h-full bg-gray-200 md:hidden"
          >
            <SearchBlackIcon className="w-5 h-5 ml-2 " />
          </button>

          {searchOpen && (
            <button
              type="button"
              className="absolute flex items-center justify-center w-10 h-full bg-gray-200 md:h-auto md:top-6 right-10 md:right-4 md:bg-transparent"
              onClick={onRemoveValue}
            >
              <CancelIcon className="w-4 h-4 text-tahiti" />
            </button>
          )}
        </div>
        {searchOpen && (
          <Dropdown searchList={searchList} inputState={isInputFocused} />
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
