import { atom } from "recoil";

export const AdultNumber = atom({
  key: "AdultNumber",
  default: 2,
});

export const ChildrenNumber = atom({
  key: "ChildrenNumber",
  default: 0,
});
