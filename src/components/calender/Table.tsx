import React from "react";
import { uid } from "react-uid";
import { generateCalendar } from "../../hooks/getMonth";
import Cell from "./Cell";

type TableType = {
  today: Date;
};

const Table = (props: TableType) => {
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
