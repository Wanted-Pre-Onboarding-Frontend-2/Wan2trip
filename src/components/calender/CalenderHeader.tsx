import React from "react";
import { getMonth, getYear } from "date-fns";
import { months, daysShort } from "../../static/constant/calenderValues";
import { uid } from "react-uid";

type TableType = {
  today: Date;
};

const CalenderHeader = (props: TableType) => {
  return (
    <>
      <button className="font-redHat text-xl font-extrabold pb-5">
        {getYear(props.today)} {months[getMonth(props.today)]}
      </button>

      <div className="text-center mx-auto w-full font-redHat ">
        <div className="flex w-full mx-auto justify-evenly ">
          {daysShort.map((day, i) => (
            <div key={uid(i)}>
              <div className="py-1 text-sm w-11 text-gray-400">{day}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CalenderHeader;
