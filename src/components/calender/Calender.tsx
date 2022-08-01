import React, { useEffect, useRef } from "react";
import { uid } from "react-uid";
import { generateCalendar } from "../../hooks/getMonth";
import { getMonth, add, getDay, getYear } from "date-fns";
import { DayState } from "../../store/global";
import { useRecoilState } from "recoil";
import { months, daysShort } from "../../static/constant/calenderValues";
import CalenderHeader from "./CalenderHeader";

import Table from "./Table";
export const Calender = () => {
  const [today, setToday] = useRecoilState(DayState);

  return (
    <div className="flex flex-col w-full">
      <button
        type="button"
        onClick={() => setToday(add(today, { months: -1 }))}
      >
        이전달
      </button>
      <button type="button" onClick={() => setToday(add(today, { months: 1 }))}>
        다음달
      </button>
      <button type="button" onClick={() => setToday(new Date())}>
        이번달
      </button>

      <div className="text-center mx-auto w-full">
        <CalenderHeader today={today} />
        <Table today={today} />

        <CalenderHeader today={add(today, { months: 1 })} />
        <Table today={add(today, { months: 1 })} />
      </div>
    </div>
  );
};
