import React from "react";
import { DayState } from "../../store/global";
import { useRecoilState, useRecoilValue } from "recoil";
import { setDate, format, getDay } from "date-fns";
type CellType = {
  value: Date | number;
};

const Cell = (props: CellType) => {
  // console.log(props.value);
  const fixedToday = format(new Date(), "yyyy-MM-dd");
  const date = format(props.value, "d");
  console.log(fixedToday);
  // const day = setDate(date, props.value);

  return (
    <>
      <div
        className={
          fixedToday === format(props.value, "yyyy-MM-dd")
            ? "w-14 h-14 cursor-pointer bg-blue-400"
            : "w-14 h-14 cursor-pointer"
        }
        onClick={() => console.log(props.value)}
      >
        {date}
      </div>
    </>
  );
};

export default Cell;
