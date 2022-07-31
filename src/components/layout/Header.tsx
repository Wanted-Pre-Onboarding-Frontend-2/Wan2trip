import React from "react";
import tw from "tailwind-styled-components";
// import { ReactComponent as Logo } from "../../static/image/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <EngSkyHeader>
      <div className="ml-10">로고</div>
      <div className="mr-10">정보</div>
    </EngSkyHeader>
  );
};

export default Header;

const EngSkyHeader = tw.header`
bg-sky-400 h-16 flex justify-between items-center relative z-20
`;
