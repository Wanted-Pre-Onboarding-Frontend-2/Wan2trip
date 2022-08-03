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
      <button className="font-redHat text-2xl font-extrabold pb-4">
        {getYear(props.today)} {months[getMonth(props.today)]}
      </button>

      <div className="text-center mx-auto w-full font-redHat bg-main">
        <div className="flex w-full mx-auto justify-center gap-[1.16rem]">
          {daysShort.map((day, i) => (
            <div key={uid(i)}>
              <div className="p-1.5 -ml-1.5">{day}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CalenderHeader;
