import React from "react";
import { useRecoilState } from "recoil";
import { DayState, dateArray } from "../store/global";
import { getMonth, add, getDay, format } from "date-fns";

export const useObserver = (
  pageNum: number,
  setPageNum: React.Dispatch<React.SetStateAction<number>>
) => {
  const [date, setDate] = useRecoilState(dateArray);
  const observer = React.useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setPageNum((no: number) => no + 1);
      }
    })
  );
  return observer;
};
