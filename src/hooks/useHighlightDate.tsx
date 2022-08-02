import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { pickDateState } from "../store/global";
import { eachDayOfInterval, isSameDay } from "date-fns";

export const useHighlightDate = () => {
  const pick = useRecoilValue(pickDateState);
  // console.log(pick.startDate);
  const highlightedArray: any =
    pick.startDate !== null && pick.endDate !== null
      ? eachDayOfInterval({ start: pick.startDate, end: pick.endDate })
      : "";

  const dateFilter = (date: any) => {
    let a = false;
    if (highlightedArray) {
      for (let i = 0; i < highlightedArray.length; i++) {
        if (isSameDay(highlightedArray[i], date)) {
          a = true;
          break;
        }
      }
      return a;
    }
  };
  return { highlightedArray, dateFilter };
};
