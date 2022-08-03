import React from "react";
import tw from "tailwind-styled-components";
// import { ReactComponent as Logo } from "../../static/image/Logo.svg";
import Back from "../../static/image/background.jpg";
import { Link } from "react-router-dom";

const BackHeader = () => {
  return (
    <EngSkyHeader>
      <img src={Back} alt="" className="w-full h-full object-cover lg:h-auto" />
    </EngSkyHeader>
  );
};

export default BackHeader;

const EngSkyHeader = tw.div`
absolute h-1/2 w-full bg-gray-300 top-0 left-0 flex items-end
`;
