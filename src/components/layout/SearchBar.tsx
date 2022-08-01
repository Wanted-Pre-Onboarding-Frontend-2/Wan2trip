import React from "react";
import tw from "tailwind-styled-components";
// import { ReactComponent as Logo } from "../../static/image/Logo.svg";
import { Link } from "react-router-dom";
import { ReactComponent as SearchBlackIcon } from "../../static/image/SearchBlack.svg";
import { ReactComponent as SearchWhiteIcon } from "../../static/image/SearchWhite.svg";
import { ReactComponent as CalendarIcon } from "../../static/image/Calendar.svg";
import { ReactComponent as UserBlackIcon } from "../../static/image/User.svg";
import { ReactComponent as CancelIcon } from "../../static/image/Cancel.svg";

const SearchBar = () => {
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form action="" onSubmit={onSubmitHandler}>
      <SearchBox>
        <SearchInner>
          <SearchInputBox>
            <label
              htmlFor=""
              className="flex justify-center items-center absolute top-5 left-3 w-6 h-6"
            >
              <SearchBlackIcon />
            </label>
            <div className="relative flex flex-row px-12 h-full ">
              <input
                type="text"
                placeholder="호텔명"
                className="flex-1 h-full pl-2 focus:outline-none border-0"
              />
              <button
                type="button"
                className="flex justify-center items-center absolute top-5 right-4 w-5 h-5"
              >
                <CancelIcon className=" w-4 h-4 text-tahiti" />
              </button>
            </div>
          </SearchInputBox>
          <CalendarBox>
            <CalendarIcon className="ml-4 w-6 h-6" />
            <div className="flex flex-row item-center pl-4 w-1/2 h-full">
              <div className="self-center">
                <span className="block text-xs text-slate-400">체크인</span>
                <strong>날짜추가</strong>
              </div>
            </div>
            <span className="block w-10 text-sm text-slate-400">1박</span>
            <div className="flex flex-row justify-end item-center px-3 w-1/2 h-full">
              <div className="self-center">
                <span className="block text-xs text-slate-400">체크아웃</span>
                <strong>날짜추가</strong>
              </div>
            </div>
          </CalendarBox>
          <GuestBox>
            <UserBlackIcon className="ml-4 w-6 h-6" />
            <div className="flex flex-row item-center pl-4 w-1/2 h-full">
              <div className="self-center">
                <span className="block text-xs text-slate-400">
                  객실 / 인원
                </span>
                <strong>객실 1, 인원 1</strong>
              </div>
            </div>
          </GuestBox>
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
flex flex-row items-center overflow-hidden relative md:mx-[2rem] pb-[0.1rem] h-16 z-20  box-border`;

const SearchInputBox = tw.div`
w-1/3 relative h-full bg-white border-r border-solid border-gray-300 rounded-l-md
`;

const CalendarBox = tw.div`
flex flex-row items-center w-1/3 relative h-full bg-white border-r border-solid border-gray-300 transition-all  cursor-pointer hover:bg-gray-100`;

const GuestBox = tw.div`
flex flex-row items-center w-1/4 relative h-full bg-white transition-all  cursor-pointer hover:bg-gray-100`;
