import React, { useState } from "react";
import SearchBar from "../components/search/SearchBar";
import Layout from "../components/layout/Layout";
// import tw from "tailwind-styled-components";
import Card from "../common/Card";
import Header from "../components/layout/Header";
import Tag from "../components/result/Tag";
import Checkbox from "../components/result/Checkbox";
import { ReactComponent as Location } from "../static/image/Location.svg";
import { ReactComponent as DownArrow } from "../static/image/DownArrow.svg";
import { ReactComponent as LeftArrow } from "../static/image/LeftArrow.svg";

const Result = () => {
  const [isMapActive, setIsMapActive] = useState(true);
  return (
    <Layout>
      <Header />
      <div className="-mt-10">
        <SearchBar />
      </div>
      <div className="flex p-10 bg-white">
        <div className="flex-col w-5/12">
          <div
            className="flex h-16 text-base font-medium text-center border rounded cursor-pointer w-72 border-slate-300 bg-zinc-200"
            onClick={() => {
              setIsMapActive(!isMapActive);
            }}
          >
            {isMapActive ? (
              <div className="flex items-center justify-center w-full h-full bg-map">
                <Location />
                지도보기
              </div>
            ) : (
              <div className="flex items-center justify-center w-full h-full ">
                <LeftArrow />
                목록으로 돌아가기
              </div>
            )}
          </div>
          <Tag />
          <div className="my-6 text-lg font-medium">가격 범위</div>
          <div className="pb-10 border-b-2 border-slate-200">
            <input
              type="range"
              id="price"
              name="price"
              min="0"
              max="99999999"
              defaultValue="Initial value"
              step="10"
              className="accent-[#FF375C] w-10/12"
            />
          </div>
          <Checkbox title="등급" />
          <Checkbox title="리뷰 평가" />
        </div>
        <div className="w-9/12 border-black px-50">
          <div className="h-24 bg-white divide-y rounded shadow-md mb-18 divide-slate-200">
            <div className="flex items-center pl-5 font-medium h-14 ">
              1,691개 호텔 중 예약가능 호텔 419개
            </div>
            <ul className="flex items-center h-8 p-0 m-0 text-sm justify-evenly">
              <li className="w-1/5 hover:text-[#FF375C] cursor-pointer flex justify-center border-r-2 border-slate-300">
                인기순
              </li>
              <li className="flex justify-center w-1/5">
                가격
                <DownArrow />
              </li>
              <li className="flex justify-center w-1/5">
                등급
                <DownArrow />
              </li>
              <li className="flex justify-center w-1/5">할인우선순</li>
              <li className="flex justify-center w-1/5">평가순</li>
            </ul>
          </div>
          {isMapActive ? (
            <div className="">
              <div className="flex flex-col items-center justify-center max-w-3xl gap-10 pt-10 mx-auto">
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          ) : (
            <div className="">지도API?</div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Result;
