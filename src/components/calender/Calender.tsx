import React, { useEffect, useRef } from "react";
import { uid } from "react-uid";
import { generateCalendar } from "../../hooks/getMonth";
import { getMonth, add, getDay, format } from "date-fns";
import { DayState, dateArray } from "../../store/global";
import { useRecoilState } from "recoil";
import { months, daysShort } from "../../static/constant/calenderValues";
import CalenderHeader from "./CalenderHeader";
import { useObserver } from "../../hooks/useObserver";
import Table from "./Table";

export const Calender = () => {
  const [today, setToday] = useRecoilState(DayState);
  const [date, setDate] = useRecoilState(dateArray);
  const [pageNum, setPageNum] = React.useState(4);
  console.log(pageNum);
  const [lastElement, setLastElement] = React.useState<
    HTMLElement | null | undefined
  >(null);
  const observer = useObserver(pageNum, setPageNum);

  React.useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement, observer]);

  useEffect(() => {
    // setToday(add(today, { months: 1 }));
    setDate([...date, add(new Date(), { months: pageNum })]);
  }, [pageNum]);

  return (
    <div className="flex flex-col w-full">
      <div className="sticky top-0 bg-gray-300 opacity-70">
        <button onClick={() => setToday(new Date())} className="w-full">
          오늘 : {format(new Date(), "yyyy년 M월 d일")}
        </button>
      </div>
      <div className="text-center mx-auto w-full flex flex-col  md:flex-row justify-between max-w-4xl flex-wrap pb-24">
        {date.map((day) => (
          <div key={uid(day)} ref={setLastElement}>
            <CalenderHeader today={day} />
            <Table today={day} />
          </div>
        ))}
      </div>
      <button onClick={() => setPageNum(pageNum + 1)}>더불러오기</button>
    </div>
  );
};
