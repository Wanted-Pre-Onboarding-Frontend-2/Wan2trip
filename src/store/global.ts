import { atom } from "recoil";

export const DayState = atom({
  key: "cutTime",
  default: new Date(),
});

export const dateArray = atom<Date[]>({
  key: "dateArray",
  default: [],
});

export const pickDateState = atom<any>({
  key: "pickDateState",
  default: {
    startDate: null,
    endDate: null,
  },
});
