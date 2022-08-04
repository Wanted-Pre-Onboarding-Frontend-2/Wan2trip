import { useState } from "react";
import { dateArray, DayState, ModalState } from "../store/global";
import { useRecoilState } from "recoil";

export const useConfirm = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const toggle = () => setIsShown(!isShown);
  return {
    isShown,
    toggle,
  };
};
