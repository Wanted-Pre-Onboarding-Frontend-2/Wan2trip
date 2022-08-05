import React, { useState } from "react";
import Tag from "./Tag";
import Sort from "./Sort";
import ResultList from "./ResultList";

const ResultMobile = () => {
  const [isMapActive, setIsMapActive] = useState(true);
  return (
    <div className=" bg-white">
      <div className="relative z-20">
        <Tag />
        <div className="h-4">
          <Sort />
        </div>
      </div>
      {isMapActive ? (
        <div className="flex-col items-center px-3 justify-center w-[100vw] gap-10 mt-20 pt-60 md:pt-36 md:-mt-20">
          <ResultList />
        </div>
      ) : null}
    </div>
  );
};
export default ResultMobile;
