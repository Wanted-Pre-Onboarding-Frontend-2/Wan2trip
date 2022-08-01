import React from "react";
import { DayState, pickDateState } from "../../store/global";
import { useRecoilState, useRecoilValue } from "recoil";
import { setDate, format, getDay, isBefore, isSameMonth } from "date-fns";
import tw from "tailwind-styled-components";
import { useHighlightDate } from "../../hooks/useHighlightDate";
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
}

const Cell = (props: CellType) => {
  // console.log(props.value);
  const [pick, setPick] = useRecoilState(pickDateState);
  const { dateFilter } = useHighlightDate();
  // console.log(dateFilter(props.value));

  const fixedToday = format(new Date(), "yyyy-MM-dd");
  const date = format(props.value, "d");
  const dateHighlights = () => {
    if (pick.startDate === null) {
      if (isBefore(props.value, new Date())) {
        alert("뒤에 날짜는 선택할수 없음");
        return;
      }
      setPick({ startDate: props.value, endDate: null });
    } else if (pick.startDate !== null && pick.endDate === null) {
      if (isBefore(props.value, pick.startDate)) {
        alert("뒤에 날짜는 선택할수 없음");
        return;
      }
      setPick({ startDate: pick.startDate, endDate: props.value });
    } else if (pick.startDate !== null && pick.endDate !== null) {
      setPick({ startDate: null, endDate: null });
    }
  };
  return (
    <>
      <EachCell
        className={
          fixedToday === format(props.value, "yyyy-MM-dd")
            ? "w-14 h-14 cursor-pointer bg-blue-400"
            : "w-14 h-14 cursor-pointer"
        }
        thisdate={props.value}
        highlights={dateFilter(props.value) ? 1 : 0}
        startpicked={pick.startDate}
        endpicked={pick.endDate}
        issame={isSameMonth(props.value, props.month) ? 1 : 0}
        onClick={() => dateHighlights()}
      >
        {date}
      </EachCell>
    </>
  );
};

export default Cell;

const EachCell = tw.div<Cells>`
${(props: Cells) => props.startpicked === props.thisdate && "bg-indigo-600"}
  ${(props: Cells) => props.endpicked === props.thisdate && "bg-indigo-600"}
    ${(props: Cells) => props.highlights === 1 && "bg-indigo-500"}
    ${(props: Cells) => props.issame === 0 && "text-gray-400"}
`;
