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

export const SearchKeyword = atom({
  key: "SearchKeyword",
  default: "",
});

export const SearchValue = atom({
  key: "SearchValue",
  default: "",
});

export const SearchData = atom({
  key: "SearchData",
  default: [],
});

export const SearchListIndex = atom({
  key: "SearchListIndex",
  default: 0,
});

export const SearchListOpen = atom({
  key: "SearchListOpen",
  default: false,
});
