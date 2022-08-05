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
      {generateCalendar(props.today).map((date) => (
        <div key={uid(date)} className="flex justify-center items-center">
          {date.map((day, index) => {
            return <Cell key={uid(index)} value={day} month={props.today} />;
          })}
        </div>
      ))}
    </>
  );
};

export default Table;
