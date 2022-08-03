import { atom } from "recoil";
import { add } from "date-fns";

export const DayState = atom({
  key: "cutTime",
  default: new Date(),
});

export const dateArray = atom<Date[]>({
  key: "dateArray",
  default: [
    new Date(),
    add(new Date(), { months: 1 }),
    add(new Date(), { months: 2 }),
    add(new Date(), { months: 3 }),
  ],
});

export const pickDateState = atom<any>({
  key: "pickDateState",
  default: {
    startDate: null,
    endDate: null,
  },
});

export const ModalState = atom({
  key: "ModalState",
  default: false,
});

// add(new Date(), { days: 7 })
// add(new Date(), { days: 8 })
