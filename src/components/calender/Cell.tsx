import React from "react";
import { DayState, pickDateState } from "../../store/global";
import { useRecoilState } from "recoil";
import { setDate, format, isBefore, isSameMonth } from "date-fns";
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
  // console.log(pick.startDate?.toString() === props.value?.toString());
  const fixedToday = format(new Date(), "yyyy-MM-dd");
  const date = format(props.value, "d");
  const { isShown, toggle } = useModal();

  const dateHighlights = () => {
    if (pick.startDate === null) {
      if (isBefore(props.value, new Date())) {
        alert("뒤에 날짜는 선택할수 없음");
        return;
      }
      setPick({ startDate: props.value, endDate: null });
    } else if (pick.startDate !== null && pick.endDate === null) {
      if (isBefore(props.value, pick.startDate)) {
        if (isBefore(props.value, new Date())) {
          alert("뒤에 날짜는 선택할수 없음");
          return;
        }
        setPick({ startDate: props.value, endDate: null });
        return;
      }
      setPick({ startDate: pick.startDate, endDate: props.value });
      setTimeout(() => {
        toggle();
      }, 200);
    } else if (pick.startDate !== null && pick.endDate !== null) {
      setPick({ startDate: null, endDate: null });
    }
  };
  return (
    <>
      <EachCell
        className={
          fixedToday === format(props.value, "yyyy-MM-dd")
            ? "w-14 h-14 max-w-full cursor-pointer outline-4 outline-dashed rounded-full"
            : "w-14 h-14 max-w-full cursor-pointer"
        }
        thisdate={props.value}
        highlights={dateFilter(props.value) ? 1 : 0}
        startpicked={pick.startDate}
        endpicked={pick.endDate}
        issame={isSameMonth(props.value, props.month) ? 1 : 0}
        isbefore={isBefore(props.value, new Date()) ? 1 : 0}
        onClick={() => dateHighlights()}
      >
        {date}
      </EachCell>
    </>
  );
};

export default Cell;

const EachCell = tw.div<Cells>`
w-full py-3.5 -ml-1 hover:ring hover:ring-offset-2 hover:ring-main hover:rounded-full hover:bg-main hover:bg-clip-border hover:z-10
${(props: Cells) =>
  props.startpicked?.toString() === props.thisdate?.toString()
    ? props.startpicked?.toString() === props.thisdate?.toString() &&
      "rounded-full bg-main ring ring-offset-2 ring-4 ring-main z-10"
    : ""}
${(props: Cells) =>
  props.endpicked?.toString() === props.thisdate?.toString()
    ? props.endpicked?.toString() === props.thisdate?.toString() &&
      "rounded-full bg-main ring ring-offset-2 ring-4 ring-main"
    : ""}

${(props: Cells) =>
  props.highlights === 1 &&
  props.startpicked.toString() !== props.thisdate.toString() &&
  props.endpicked.toString() !== props.thisdate.toString() &&
  "bg-main bg-clip-content"}
${(props: Cells) => props.issame === 0 && "text-gray-400"}
${(props: Cells) => props.isbefore === 1 && "text-gray-400"}
`;
