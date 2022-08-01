import React from "react";
import { DayState } from "../../store/global";
import { useRecoilState, useRecoilValue } from "recoil";
import { setDate } from "date-fns";
type CellType = {
  children: React.ReactNode | React.ReactNode[];
  value: number;
  className: string;
};

const Cell = (props: CellType) => {
  // console.log(props.value);
  const today = useRecoilValue(DayState);
  const day = setDate(today, props.value);
  return (
    <>
      <div className={props.className} onClick={() => console.log(day)}>
        {props.children}
      </div>
    </>
  );
};

export default Cell;
