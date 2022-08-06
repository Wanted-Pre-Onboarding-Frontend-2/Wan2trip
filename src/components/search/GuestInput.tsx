import React, { useState, useEffect, useRef } from "react";
import tw from "tailwind-styled-components";
import UserBlackIcon from "../../static/image/User.svg";
import { ReactComponent as CloseIcon } from "../../static/image/Close.svg";

import GuestCounter from "./GuestCounter";
import { useRecoilState } from "recoil";
import { AdultNumber, ChildrenNumber, PeopleNumber } from "store/search";

const maxPeople = 8;

interface GuestProps {
  peopleNum: number;
}

const GuestInput = ({ peopleNum }: GuestProps) => {
  const [adultNum, setAdultNum] = useRecoilState(AdultNumber);
  const [childrenNum, setChildrenNum] = useRecoilState(ChildrenNumber);
  const [open, setOpen] = useState(false);
  const guestRef = useRef<any>();

  const onClickOpen = () => {
    setOpen(true);
  };

  const onClickClosebtn = () => {
    setOpen(false);
  };

  const onClickClose: any = (event: React.MouseEvent<HTMLElement>) => {
    if (guestRef.current && !guestRef.current.contains(event.target)) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const onClickCounter = (counter: string, people: string) => {
    switch (counter) {
      case "plus":
        if (people === "adult" && adultNum !== maxPeople) {
          setAdultNum(adultNum + 1);
        } else if (people === "children" && childrenNum !== maxPeople) {
          setChildrenNum(childrenNum + 1);
        }
        break;
      case "minus":
        if (people === "adult" && adultNum !== 0) {
          setAdultNum(adultNum - 1);
        } else if (people === "children" && childrenNum !== 0) {
          setChildrenNum(childrenNum - 1);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("click", onClickClose);
    return () => {
      window.addEventListener("click", onClickClose);
    };
  }, []);

  return (
    <GuestBox ref={guestRef}>
      <img
        src={UserBlackIcon}
        className="hidden w-6 h-6 ml-4 md:block"
        alt=""
      />
      <div
        className="flex flex-row w-1/2 h-full pl-4 item-center"
        onClick={onClickOpen}
      >
        <div className="self-center">
          <span className="block text-xs text-slate-400">인원</span>
          <input type="hidden" value={peopleNum} />
          <strong className="whitespace-nowrap ">인원 {peopleNum}</strong>
        </div>
      </div>
      {open && (
        <GuestNumberBox>
          <div className="pt-12 md:pt-4">
            <button
              type="button"
              className="absolute top-5 right-5 md:hidden"
              onClick={onClickClosebtn}
            >
              <CloseIcon />
            </button>
            <div>
              <strong className="block pb-2 border-b">인원</strong>
              <div className="pb-6">
                <GuestCounter
                  title="성인"
                  people="adult"
                  value={adultNum}
                  onClick={onClickCounter}
                />
                <GuestCounter
                  title="아동"
                  people="children"
                  value={childrenNum}
                  onClick={onClickCounter}
                />
              </div>
            </div>
          </div>
        </GuestNumberBox>
      )}
    </GuestBox>
  );
};

export default GuestInput;

const GuestBox = tw.div`
 flex flex-row items-center md:w-1/4 relative h-full bg-white transition-all  cursor-pointer hover:bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-400`;

const GuestNumberBox = tw.div`
fixed top-0 md:left-0 right-0 z-20 w-full h-full md:h-auto md:absolute md:top-18 px-5  bg-white md:shadow-lg md:rounded`;
