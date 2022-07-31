import React from "react";
import tw from "tailwind-styled-components";
// import { ReactComponent as Logo } from "../../static/image/Logo.svg";
import { Link } from "react-router-dom";

const BackHeader = () => {
  return <EngSkyHeader>백그라운드 헤더 배경화면 용</EngSkyHeader>;
};

export default BackHeader;

const EngSkyHeader = tw.header`
absolute h-80 w-full bg-blue-500 top-0 max-w-5xl flex items-end
`;
