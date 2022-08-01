import React from "react";
import tw from "tailwind-styled-components";
// import { ReactComponent as Logo } from "../../static/image/Logo.svg";
import { Link } from "react-router-dom";

const BackHeader = () => {
  return <EngSkyHeader></EngSkyHeader>;
};

export default BackHeader;

const EngSkyHeader = tw.div`
absolute h-80 w-full bg-gray-300 top-0 max-w-5xl flex items-end
`;
