import React from "react";
import tw from "tailwind-styled-components";
import MinusIcon from "../../static/image/Minus.svg";
import PlusIcon from "../../static/image/Plus.svg";

interface CounterProps {
  title: string;
  value: number;
  people: string;
  onClick: (counter: string, people: string) => void;
}

const GuestCounter = ({ title, value, onClick, people }: CounterProps) => {
  return (
    <GuestCounterBox>
      <span className="text-sm">{title}</span>
      <div className="flex justify-between items-center">
        <GuestCounterBtn type="button" onClick={() => onClick("minus", people)}>
          <img src={MinusIcon} alt="마이너스" className="w-3 h-3" />
        </GuestCounterBtn>
        <span className="mx-4">{value}</span>
        <GuestCounterBtn type="button" onClick={() => onClick("plus", people)}>
          <img src={PlusIcon} alt="플러스" className="w-3 h-3" />
        </GuestCounterBtn>
      </div>
    </GuestCounterBox>
  );
};

export default GuestCounter;

const GuestCounterBox = tw.div`
flex justify-between items-center pt-5
`;

const GuestCounterBtn = tw.button`
  border border-slate-500 p-1
`;
