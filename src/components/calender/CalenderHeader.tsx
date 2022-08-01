import React from "react";
import { getMonth, add, getDay, getYear } from "date-fns";
import { months, daysShort } from "../../static/constant/calenderValues";
import { DayState } from "../../store/global";
import { useRecoilState } from "recoil";
import { uid } from "react-uid";

type TableType = {
  today: Date;
};

const CalenderHeader = (props: TableType) => {
  return (
    <>
      <button>
        {getYear(props.today)} {months[getMonth(props.today)]}
      </button>

      <div className="text-center mx-auto w-full">
        <div className="flex w-full mx-auto justify-center gap-7">
          {daysShort.map((day, i) => (
            <div key={uid(i)}>
              <div>{day}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CalenderHeader;
