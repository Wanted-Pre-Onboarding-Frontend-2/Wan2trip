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
      <div className="flex flex-wrap w-full pb-10 font-semibold border-b-2 justify-evenly text-slate-300 border-slate-200">
        {tags.map((tag, index) => (
          <>
            <div key={index}>
              <input type="checkbox" className="hidden" id="tagActive" />
              <label
                htmlFor="tagActive"
                className="checked:border-[#FF375C] checked:text-[#FF375C] checked:bg-[#FEEEF1] 
                flex flex-col items-center justify-center h-12 m-1 border cursor-pointer w-[8.75rem] rounded-3xl border-slate-300"
              >
                {tag}
              </label>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Tag;
