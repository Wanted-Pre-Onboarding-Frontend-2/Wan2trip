import React from "react";
import tw from "tailwind-styled-components";
import {
  isSameMonth,
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
  eachDayOfInterval,
  format,
  getMonth,
} from "date-fns";

export const generateCalendar = (firstDateOfMonth: Date): number[][] => {
  //   const date = startOfMonth(firstDateOfMonth);
  const monthStart = startOfMonth(firstDateOfMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const [aa, setAa] = React.useState<string>();

  const getDay = (date: Date) => {
    let day = date.getDay();
    if (day === 0) day = 7;
    return day;
  };
  //   console.log(monthStart.getDay());
  const distance = (startDate: Date, date: Date) => {
    const startArray: any = [];
    const toStart = eachDayOfInterval({ start: startDate, end: date });
    toStart.forEach((day) => {
      startArray.push(parseInt(format(day, "d")));
    });
    return startArray;
  };

  const engDistance = (endDate: Date, monthEnd: Date) => {
    const endArray: any = [];
    const toStart = eachDayOfInterval({ start: monthEnd, end: endDate });
    toStart.forEach((day) => {
      endArray.push(parseInt(format(day, "d")));
    });
    return endArray;
  };
  // console.log(getDay(monthStart));
  const calendar: number[][] = [[]];
  for (
    let i = 0;
    i < (getDay(monthStart) === 7 ? 0 : getDay(monthStart));
    i++
  ) {
    calendar[calendar.length - 1].push(distance(startDate, monthStart)[i]);
  }

  while (isSameMonth(monthStart, firstDateOfMonth)) {
    calendar[calendar.length - 1].push(monthStart.getDate());

    if (getDay(monthStart) % 7 === 6) {
      calendar.push([]);
    }

    monthStart.setDate(
      getDay(startDate) === 1
        ? monthStart.getDate() - 1
        : monthStart.getDate() + 1
    );
  }

  if (getDay(monthStart)) {
    for (let i = 1; i < engDistance(endDate, monthEnd).length; i++) {
      calendar[calendar.length - 1].push(engDistance(endDate, monthEnd)[i]);
    }
  }

  return calendar;
};
