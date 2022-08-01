import React from "react";
import { uid } from "react-uid";
import { generateCalendar } from "../../hooks/getMonth";
import { DayState } from "../../store/global";
import { useRecoilState } from "recoil";
import Cell from "./Cell";

type TableType = {
  today: Date;
};

const Table = (props: TableType) => {
  // const [today, setToday] = useRecoilState(DayState);

  return (
    <>
      {generateCalendar(props.today).map((date, i) => (
        <div key={i} className="flex justify-center items-center">
          {date.map((day, i) => {
            return <Cell key={uid(i)} value={day} month={props.today} />;
          })}
        </div>
      ))}
    </>
  );
};

export default Table;
