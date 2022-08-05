import React from "react";
import { useSetRecoilState } from "recoil";
import { SearchListOpen, SearchValue } from "store/search";
import tw from "tailwind-styled-components";

interface PropsType {
  searchList: string[] | undefined;
  inputState: boolean;
}

const Dropdown = ({ searchList, inputState }: PropsType) => {
  const setKeyword = useSetRecoilState(SearchValue);
  const setSearchDropdownOpen = useSetRecoilState(SearchListOpen);

  const handleClickGetValue = (hotel: string, index: number) => {
    setKeyword(hotel);
    setSearchDropdownOpen(false);
  };

  return (
    <div
      className={`${
        !inputState
          ? "hidden"
          : "w-80 mt-1 h-auto relative bg-white md:border-r md:border-solid border-gray-300 border rounded-md"
      }`}
    >
      <ul className="overflow-x-hidden overflow-y-auto max-h-56">
        {searchList?.map((hotel: string, index: number) => (
          <li
            key={hotel + index}
            className="p-2 text-sm cursor-pointer hover:bg-slate-200"
            onClick={() => handleClickGetValue(hotel, index)}
          >
            {hotel}
          </li>
        ))}
        {searchList?.length === 0 && (
          <li className="p-4 text-sm">검색 결과가 없습니다.</li>
        )}
      </ul>
    </div>
  );
};

export default Dropdown;

const div = tw.div`
absolute top-18 left-0 p-4 w-80 bg-white shadow-lg rounded`;
