import React from "react";
import SearchBar from "../components/layout/SearchBar";
import Layout from "../components/layout/Layout";
import tw from "tailwind-styled-components";
import Card from "../common/Card";

const Result = () => {
  return (
    <Layout>
      <div className="flex bg-white">
        <div className="flex-col w-1/3">
          <div className="w-72 flex flex-col justify-center items-center h-16 rounded text-center text-base font-medium border-slate-300 border bg-zinc-200">
            지도보기
          </div>
          <div className="text-lg font-medium my-6">관련태그</div>
          <ul className="flex flex-wrap m-0 p-0">
            <li className="w-36 h-12 rounded-3xl text-slate-300 border-slate-300 border flex flex-col justify-center items-center cursor-pointer">
              #비지니스
            </li>
            <li>#쇼핑</li>
            <li>#가족</li>
            <li>#럭셔리</li>
            <li>#스파</li>
            <li>#반려동물</li>
            <li>#시티</li>
            <li>#골프</li>
            <li>#친환경</li>
            <li>#카지노</li>
            <li>#자연</li>
            <li>#커플</li>
            <li>#스키</li>
            <li>#고급/럭셔리</li>
            <li>#부티크</li>
            <li>#가족</li>
            <li>#단체/MT/워크샵</li>
            <li>#로맨틱</li>
            <li>#풀빌라</li>
            <li>#한옥</li>
            <li>#레지던스</li>
            <li>#부티크</li>
            <li>#어드벤처</li>
            <li>#애견펜션</li>
            <li>#와이너리</li>
          </ul>
        </div>
        <div className="w-2/3 border-black px-50">
          <div className="mb-18 rounded shadow-md h-24 divide-y divide-slate-200 bg-white">
            <div className="h-14 flex items-center pl-5 font-medium	">
              1,691개 호텔 중 예약가능 호텔 419개
            </div>
            <ul className="flex h-8 items-center justify-evenly m-0 p-0">
              <li className="hover:text-[#FF375C] cursor-pointer">인기순</li>
              <li>가격</li>
              <li>등급</li>
              <li>할인우선순</li>
              <li>평가순</li>
            </ul>
          </div>
          <div className="flex flex-col max-w-3xl mx-auto justify-center items-center pt-10 gap-10">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Result;
