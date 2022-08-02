import { useState } from "react";
import { dateArray, DayState, ModalState } from "../store/global";
import { useRecoilState } from "recoil";

export const useModal = () => {
  const [isShown, setIsShown] = useRecoilState<boolean>(ModalState);
  const toggle = () => setIsShown(!isShown);
  return {
    isShown,
    toggle,
  };
};
