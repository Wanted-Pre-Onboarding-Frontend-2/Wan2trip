import React, { useRef, useState } from "react";
import tw from "tailwind-styled-components";
import { ReactComponent as SearchBlackIcon } from "../../static/image/SearchBlack.svg";
import { ReactComponent as CancelIcon } from "../../static/image/Cancel.svg";

interface SearchProps {
  value: string;
  remove: boolean;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ value, onChangeHandler, remove }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);

  const onRemoveValue = () => {
    if (searchRef.current) searchRef.current.value = "";
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
          {remove && (
            <button
              type="button"
              className="absolute flex items-center justify-center w-5 h-5 top-4 md:top-5 right-4"
              onClick={onRemoveValue}
            >
              <CancelIcon className="w-4 h-4  text-tahiti" />
            </button>
          )}
        </div>
        {open && (
          <SearchListBox>
            <ul className="overflow-x-hidden overflow-y-auto max-h-56">
              <li className="p-2 cursor-pointer hover:bg-slate-200">
                Search List
              </li>
              <li className="p-2 cursor-pointer hover:bg-slate-200">
                Search List
              </li>
              <li className="p-2 cursor-pointer hover:bg-slate-200">
                Search List
              </li>
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
