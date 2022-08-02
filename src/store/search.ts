import { atom } from "recoil";

export const AdultNumber = atom({
  key: "AdultNumber",
  default: 2,
});

export const ChildrenNumber = atom({
  key: "ChildrenNumber",
  default: 0,
});

export const PeopleNumber = atom({
  key: "PeopleNumber",
  default: 0,
});

export const SearchData = atom({
  key: "SearchData",
  default: [],
});
