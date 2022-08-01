import React, { useEffect, useRef } from "react";
import { uid } from "react-uid";
import { getMonth, add, getDay, format } from "date-fns";
import { dateArray } from "../../store/global";
import { useRecoilState } from "recoil";
import { months, daysShort } from "../../static/constant/calenderValues";
import CalenderHeader from "./CalenderHeader";
import { useObserver } from "../../hooks/useObserver";
import Table from "./Table";

export const Calender = () => {
  const [date, setDate] = useRecoilState(dateArray);
  const [pageNum, setPageNum] = React.useState(4);
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
    setDate([...date, add(new Date(), { months: pageNum })]);
  }, [pageNum]);

  return (
    <div className="flex flex-col w-full">
      <div className="text-center mx-auto w-full flex flex-col  ip:flex-row ip:justify-between max-w-4xl flex-wrap pb-24">
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
