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
          className="flex justify-center items-center absolute top-5 left-3 w-6 h-6"
        >
          <SearchBlackIcon />
        </label>
        <div className="relative flex flex-row px-12 h-full ">
          <input
            name="hotel_name"
            id="hotel_name"
            type="text"
            placeholder="호텔명"
            className="flex-1 h-full pl-2 focus:outline-none border-0"
            onChange={onChangeHandler}
            value={value}
            ref={searchRef}
          />
          {remove && (
            <button
              type="button"
              className="flex justify-center items-center absolute top-5 right-4 w-5 h-5"
              onClick={onRemoveValue}
            >
              <CancelIcon className=" w-4 h-4 text-tahiti" />
            </button>
          )}
        </div>
        {open && (
          <SearchListBox>
            <ul className="overflow-x-hidden overflow-y-auto max-h-56">
              <li className="p-2 hover:bg-slate-200 cursor-pointer">
                Search List
              </li>
              <li className="p-2 hover:bg-slate-200 cursor-pointer">
                Search List
              </li>
              <li className="p-2 hover:bg-slate-200 cursor-pointer">
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
w-1/3 relative h-full bg-white border-r border-solid border-gray-300 rounded-l-md
`;

const SearchListBox = tw.div`
absolute top-18 left-0 p-4 w-80 bg-white shadow-lg rounded`;
