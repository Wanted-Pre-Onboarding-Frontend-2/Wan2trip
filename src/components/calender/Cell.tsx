import React from "react";
import { pickDateState } from "../../store/global";
import { useRecoilState } from "recoil";
import { format, isBefore, isSameMonth, isSameDay } from "date-fns";
import tw from "tailwind-styled-components";
import { useHighlightDate } from "../../hooks/useHighlightDate";
import { useModal } from "../../hooks/useModal";

type CellType = {
  value: Date | number;
  month: Date;
};

interface Cells {
  thisdate: Date;
  startpicked: Date;
  endpicked: Date;
  highlights: number;
  issame: number;
  isbefore: number;
}

const Cell = (props: CellType) => {
  const [pick, setPick] = useRecoilState(pickDateState);
  const { dateFilter } = useHighlightDate();

  const fixedToday = format(new Date(), "yyyy-MM-dd");
  const date = format(props.value, "d");
  const { isShown, toggle } = useModal();

  const dateHighlights = () => {
    if (pick.startDate === null) {
      if (isBefore(props.value, new Date())) {
        alert("오늘이나 오늘보다 이전 날짜는 선택할수 없습니다.");
        return;
      }
      setPick({ startDate: props.value, endDate: null });
    } else if (pick.startDate !== null && pick.endDate === null) {
      if (isBefore(props.value, pick.startDate)) {
        if (isBefore(props.value, new Date())) {
          alert("오늘이나 오늘보다 이전 날짜는 선택할수 없습니다.");
          return;
        }
        setPick({ startDate: props.value, endDate: null });
        return;
      }
      setPick({ startDate: pick.startDate, endDate: props.value });
      setTimeout(() => {
        toggle();
      }, 250);
    } else if (pick.startDate !== null && pick.endDate !== null) {
      setPick({ startDate: null, endDate: null });
    }
  };

  return (
    <>
      <EachCell
        thisdate={props.value}
        startpicked={pick.startDate}
        endpicked={pick.endDate}
        highlights={dateFilter(props.value) ? 1 : 0}
      >
        <CellActive
          className={
            fixedToday === format(props.value, "yyyy-MM-dd")
              ? "outline-4 outline-dashed rounded-full"
              : ""
          }
          thisdate={props.value}
          startpicked={pick.startDate}
          endpicked={pick.endDate}
          highlights={dateFilter(props.value) ? 1 : 0}
          issame={isSameMonth(props.value, props.month) ? 1 : 0}
          isbefore={isBefore(props.value, new Date()) ? 1 : 0}
          onClick={() => dateHighlights()}
        >
          {date}
        </CellActive>
      </EachCell>
    </>
  );
};

export default Cell;

const EachCell = tw.div<Cells>`
relative w-full h-14 flex justify-center items-center 
${(props: Cells) =>
  props.highlights === 1 &&
  "bg-red-200 bg-clip-content w-full h-6 rounded-none"}
${(props: Cells) =>
  isSameDay(props.endpicked, props.thisdate)
    ? isSameDay(props.endpicked, props.thisdate) && ""
    : ""}
    
`;

// const EachCell = tw.div<Cells>`
// w-full py-3.5 -ml-1 hover:rounded-full hover:bg-main hover:bg-clip-border hover:z-10
// ${(props: Cells) =>
//   isSameDay(props.startpicked, props.thisdate)
//     ? isSameDay(props.startpicked, props.thisdate) &&
//       "rounded-full bg-main z-10"
//     : ""}
// ${(props: Cells) =>
//   isSameDay(props.endpicked, props.thisdate)
//     ? isSameDay(props.endpicked, props.thisdate) && "rounded-full bg-main "
//     : ""}

// ${(props: Cells) =>
//   props.highlights === 1 &&
//   !isSameDay(props.startpicked, props.thisdate) &&
//   !isSameDay(props.endpicked, props.thisdate) &&
//   "bg-red-200 bg-clip-content"}
// ${(props: Cells) => props.issame === 0 && "text-gray-400"}
// ${(props: Cells) => props.isbefore === 1 && "text-gray-400"}
// `;

const CellActive = tw.div<Cells>`
flex justify-center items-center w-9 h-9 rounded-full cursor-pointer
${(props: Cells) =>
  isSameDay(props.startpicked, props.thisdate)
    ? isSameDay(props.startpicked, props.thisdate) && "bg-main text-white"
    : ""}
${(props: Cells) =>
  isSameDay(props.endpicked, props.thisdate)
    ? isSameDay(props.endpicked, props.thisdate) && "bg-main text-white"
    : ""}
${(props: Cells) => props.issame === 0 && "cursor-not-allowed	"}
${(props: Cells) => props.isbefore === 1 && "text-gray-400 cursor-not-allowed	"}
`;
