import React from "react";
import { uid } from "react-uid";
import { generateCalendar } from "../../hooks/getMonth";
import { DayState } from "../../store/global";
import { useRecoilState } from "recoil";
import Cell from "./Cell";
// type TableType = {
//   className: string;
// };

const Table = () => {
  const [today, setToday] = useRecoilState(DayState);
  return (
    <>
      {generateCalendar(today).map((date, i) => (
        <div key={i} className="flex justify-center items-center">
          {date.map((day, i) => {
            return (
              <Cell key={uid(i)} className="w-14 h-14" value={day}>
                {day}
              </Cell>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default Table;
