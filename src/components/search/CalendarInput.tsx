import React from "react";
import tw from "tailwind-styled-components";
import { ReactComponent as CalendarIcon } from "../../static/image/Calendar.svg";

const CalendarInput = () => {
  return (
    <CalendarBox>
      <CalendarIcon className="ml-4 w-6 h-6" />
      <div className="flex flex-row item-center pl-4 w-1/2 h-full">
        <div className="self-center">
          <span className="block text-xs text-slate-400">체크인</span>
          <input type="hidden" readOnly value="2022-08-01" />
          <strong>8월 1일</strong>
        </div>
      </div>
      <span className="block w-10 text-sm text-slate-400">1박</span>
      <div className="flex flex-row justify-end item-center px-3 w-1/2 h-full">
        <div className="self-center">
          <span className="block text-xs text-slate-400">체크아웃</span>
          <input type="hidden" readOnly value="2022-08-02" />
          <strong>8월 2일</strong>
        </div>
      </div>
    </CalendarBox>
  );
};

export default CalendarInput;

const CalendarBox = tw.div`
flex flex-row items-center w-1/3 relative h-full bg-white border-r border-solid border-gray-300 transition-all  cursor-pointer hover:bg-gray-100`;
