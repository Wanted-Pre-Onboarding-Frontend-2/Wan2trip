import React, { useState, useEffect } from "react";

const Checkbox = (props: string | any) => {
  const [isGrade, setIsGrade] = useState<string[]>([
    "5성급",
    "4성급",
    "3성급",
    "2성급",
    "1성급",
  ]);
  useEffect(() => {
    if (props.title === "리뷰 평가") {
      setIsGrade(["최고", "매우 좋음", "좋음", "보통", "없음"]);
    }
  }, []);

  return (
    <>
      <div className="my-6 text-lg font-medium">{props.title}</div>
      <div className="flex flex-col pb-10 border-b-2 justify-self-start border-slate-200">
        {isGrade.map((value, index) => (
          <label className="w-21" key={index}>
            <input
              type="checkbox"
              className="accent-[#FF375C] mr-4"
              defaultChecked
            />
            {value}
          </label>
        ))}
      </div>
    </>
  );
};

export default Checkbox;
