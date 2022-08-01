import React, { useState } from "react";

const Tag = () => {
  const [isTagActive, setIsTagActive] = useState(true);
  const tags = [
    "#비지니스",
    "#쇼핑",
    "#가족",
    "#럭셔리",
    "#스파",
    "#반려동물",
    "#시티",
    "#골프",
    "#친환경",
    "#카지노",
    "#자연",
    "#커플",
    "#스키",
    "#고급/럭셔리",
    "#부티크",
    "#가족",
    "#단체/MT/워크샵",
    "#로맨틱",
    "#풀빌라",
    "#한옥",
    "#레지던스",
    "#부티크",
    "#어드벤처",
    "#애견펜션",
    "#와이너리",
  ];
  return (
    <>
      <div className="my-6 text-lg font-medium">관련태그</div>
      {/* <ul className="flex flex-wrap w-full p-0 pb-10 m-0 font-semibold border-b-2 text-slate-300 border-slate-200">
        {tags.map((tag, index) => (
          <li
            key={index}
            className={`${
              isTagActive ? "" : "text-[#FF375C] border-[#FF375C] bg-[#FEEEF1]"
            } w-36 h-12 rounded-3xl border-slate-300 border flex flex-col justify-center items-center cursor-pointer m-1`}
            onClick={() => {
              setIsTagActive(!isTagActive);
            }}
          >
            {tag}
          </li>
        ))}
      </ul> */}
      <div className="flex flex-wrap w-full p-0 pb-10 m-0 font-semibold border-b-2 text-slate-300 border-slate-200">
        <input type="checkbox" className="sr-only peer" id="tagActive" />
        {tags.map((tag, index) => (
          <label
            key={index}
            htmlFor="tagActive"
            className="peer-checked:border-[#FF375C] peer-checked:text-[#FF375C] peer-checked:bg-[#FEEEF1]
             w-36 h-12 rounded-3xl border-slate-300 border flex flex-col justify-center items-center cursor-pointer m-1"
          >
            {tag}
          </label>
        ))}
      </div>
    </>
  );
};

export default Tag;
