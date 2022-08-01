import { atom } from "recoil";

export const DayState = atom({
  key: "cutTime",
  default: new Date(),
});

export const weekdayArray = atom({
  key: "weekdayArray",
  default: [""],
});

export const timeState = atom({
  key: "timeState",
  default: {
    time: 0,
    startTime: 0,
  },
});
