import React, { useState } from "react";
import VirtualScroll from "common/VirtualScroll";
import Tag from "./Tag";
import Sort from "./Sort";
import Card from "../../common/Card";
import ResultList from "./ResultList";

const ResultMobile = () => {
  const [isMapActive, setIsMapActive] = useState(true);
  return (
    <div className="mt-48 bg-white">
      <div className="relative z-20">
        <Tag />
        <div className="h-4">
          <Sort />
        </div>
      </div>
      {isMapActive ? (
        <div className="flex-col items-center justify-center w-[100vw] gap-10 mt-20 pt-10 md:-mt-20">
          <ResultList />
        </div>
      ) : null}
    </div>
  );
};
export default ResultMobile;
