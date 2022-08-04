import React, { useEffect, useRef } from "react";
import { uid } from "react-uid";
import { getMonth, add, getDay, format, isBefore, isSameMonth } from "date-fns";
import { dateArray, DayState } from "../../store/global";
import { useRecoilState } from "recoil";
import CalenderHeader from "./CalenderHeader";
import { useObserver } from "../../hooks/useObserver";
import Table from "./Table";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { ReactComponent as Left } from "../../static/icons/LeftArrow.svg";
import { ReactComponent as Right } from "../../static/icons/RightArrow.svg";
import _ from "lodash";

export const Calender = () => {
  const [today, setToday] = useRecoilState(DayState);
  const [date, setDate] = useRecoilState(dateArray);
  const [pageNum, setPageNum] = React.useState(4);
  const fixedToday = new Date();
  const { observer, lastElement, setLastElement } = useObserver(
    pageNum,
    setPageNum
  );
  const matches = useMediaQuery("(min-width: 768px)");
  // console.log(matches);

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
    if (pageNum < 12)
      setDate(_.uniq([...date, add(fixedToday, { months: pageNum })]));
  }, [pageNum]);

  const goToBefore = () => {
    if (!isBefore(new Date(), today))
      return alert("더 이전으로는 갈수 없어요!");
    setToday(add(today, { months: -1 }));
  };

  const goToAfter = () => {
    if (isSameMonth(add(new Date(), { months: 11 }), today))
      return alert("더 이후의 예약은 아직 할수 없어요!");
    setToday(add(today, { months: 1 }));
  };

  const goToAfterMoblie = () => {
    if (pageNum < 12) {
      return setDate(_.uniq([...date, add(fixedToday, { months: pageNum })]));
    }
    alert("더 이후의 예약은 아직 할수 없어요!");
  };
  return (
    <div className="flex flex-col w-full font-redHat">
      <div className="text-center mx-auto w-full flex flex-col ip:flex-row ip:justify-between max-w-4xl flex-wrap pb-24">
        {matches && (
          <>
            <div className="flex flex-col mx-auto">
              <div className="flex justify-between text-main absolute w-[98.3%] top-20 left-2">
                <button type="button" onClick={goToBefore}>
                  <Left
                    className={
                      !isBefore(new Date(), today)
                        ? "w-14 fill-gray-300"
                        : "w-14 fill-gray-700"
                    }
                  />
                </button>
                <button type="button" onClick={goToAfter}>
                  <Right
                    className={
                      isSameMonth(add(new Date(), { months: 11 }), today)
                        ? "w-14 fill-gray-300"
                        : "w-14 fill-gray-700"
                    }
                  />
                </button>
              </div>
              <div className="flex flex-row gap-4 ">
                <div className=" p-4 py-10 rounded-2xl drop-shadow-md shadow-xl bg-white">
                  <CalenderHeader today={today} />
                  <Table today={today} />
                </div>
                <div className=" p-4 py-10 rounded-2xl drop-shadow-md shadow-xl bg-white">
                  <CalenderHeader today={add(today, { months: 1 })} />
                  <Table today={add(today, { months: 1 })} />
                </div>
              </div>
            </div>
          </>
        )}

        {!matches && (
          <>
            {date.map((day) => (
              <div key={uid(day)} ref={setLastElement} className="bg-white">
                <CalenderHeader today={day} />
                <Table today={day} />
              </div>
            ))}
            <button onClick={goToAfterMoblie}>loading...</button>
          </>
        )}
      </div>
    </div>
  );
};
