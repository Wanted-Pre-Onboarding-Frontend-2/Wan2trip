import React from "react";
import tw from "tailwind-styled-components";
import { ReactComponent as CalendarIcon } from "../../static/image/Calendar.svg";
import { Modal } from "../../common/Modal";
import { useModal } from "../../hooks/useModal";
import { Calender } from "../calender/Calender";
import { useRecoilState, useRecoilValue } from "recoil";
import { format, add } from "date-fns";
import { pickDateState } from "../../store/global";
import { useHighlightDate } from "../../hooks/useHighlightDate";
const CalendarInput = () => {
  const [pick, setPick] = useRecoilState(pickDateState);
  const { highlightedArray } = useHighlightDate();
  const { isShown, toggle } = useModal();
  const content = <Calender />;
  return (
    <>
      <CalendarBox onClick={toggle}>
        <CalendarIcon className="ml-4 w-6 h-6" />
        <div className="flex flex-row item-center pl-4 w-1/2 h-full">
          <div className="self-center">
            <span className="block text-xs text-slate-400">체크인</span>
            {/* <input type="hidden" readOnly value="2022-08-01" /> */}
            <strong>
              {pick.startDate
                ? format(pick.startDate, "M월 d일")
                : format(new Date(), "M월 d일")}
            </strong>
          </div>
        </div>
        <span className="block w-10 text-sm text-slate-400">
          {highlightedArray.length > 1 ? highlightedArray.length - 1 : 0}박
        </span>
        <div className="flex flex-row justify-end item-center px-3 w-1/2 h-full">
          <div className="self-center">
            <span className="block text-xs text-slate-400">체크아웃</span>
            {/* <input type="hidden" readOnly value="2022-08-02" /> */}
            <strong>
              {pick.startDate
                ? pick.endDate
                  ? format(pick.endDate, "M월 d일")
                  : format(add(pick.startDate, { days: 1 }), "M월 d일")
                : format(add(new Date(), { days: 1 }), "M월 d일")}
            </strong>
          </div>
        </div>
      </CalendarBox>
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={content}
        headerText={`${format(new Date(), "yyyy년 M월 d일")} 예약 현황`}
      />
    </>
  );
};

export default CalendarInput;

const CalendarBox = tw.div`
flex flex-row items-center w-1/3 relative h-full bg-white border-r border-solid border-gray-300 transition-all  cursor-pointer hover:bg-gray-100`;
