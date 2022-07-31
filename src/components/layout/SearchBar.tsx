import React from "react";
import tw from "tailwind-styled-components";
// import { ReactComponent as Logo } from "../../static/image/Logo.svg";
import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <HeaderBox>
      <InnerHeader>서치바 서치바는 배경이 투명함 헤더와 다름</InnerHeader>
    </HeaderBox>
  );
};

export default SearchBar;

const HeaderBox = tw.header`
pt-16 z-20
`;

const InnerHeader = tw.div`
bg-sky-400 h-32 flex justify-center items-center relative md:mx-[2rem] pb-[0.1rem]
 border-gray-400 border z-20`;
