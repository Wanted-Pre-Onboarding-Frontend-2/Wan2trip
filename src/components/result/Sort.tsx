import React, { useState } from "react";
import { ReactComponent as DownArrow } from "../../static/image/DownArrow.svg";

const Sort = () => {
  const sortList = ["인기순", "가격", "등급", "할인우선순", "평가순"];
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* web */}
      <div className="hidden md:hidden lg:block">
        <div className="flex items-center pl-5 font-medium h-14 ">
          1,691개 호텔 중 예약가능 호텔 419개
        </div>
        <ul className="flex items-center h-8 p-0 m-0 text-sm justify-evenly">
          {sortList.map((value, index) =>
            String(value) === "가격" ? (
              <li
                key={index}
                className="relative w-1/5 hover:text-[#FF375C] cursor-pointer flex justify-center border-r-2 border-slate-300"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                {value}
                <DownArrow className="w-4 text-[#FF375C] fill-current hover:fill-[#FF375C]" />
              </li>
            ) : (
              <li
                key={index}
                className="w-1/5 hover:text-[#FF375C] cursor-pointer flex justify-center border-r-2 border-slate-300 last:border-r-0"
              >
                {value}
              </li>
            )
          )}
        </ul>
        {open && (
          <div className="absolute flex items-center justify-center w-1/5 h-24 text-sm font-semibold bg-white rounded shadow-lg left-[120px] top-[100px] z-10">
            <div>
              <div className="block pb-2">높은 가격순</div>
              <div className="block pb-2">낮은 가격순</div>
            </div>
          </div>
        )}
      </div>
      {/* mobile */}
      <div className="fixed border-b-2 md:-mt-28 md:relative lg:hidden border-slate-300 w-[100vw] bg-white drop-shadow-xl mt-18">
        <div className="flex items-center pl-10 font-medium h-14">
          1,691개 호텔 중 예약가능 호텔 419개
        </div>
        <select className="absolute flex items-center justify-center justify-self-end right-6 bottom-4">
          {sortList.map((value, index) => (
            <option
              key={index}
              className="w-1/5 hover:text-[#FF375C] cursor-pointer flex justify-center border-r-2 border-slate-300 last:border-r-0"
            >
              {value}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Sort;
