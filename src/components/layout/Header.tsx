import React from "react";
import tw from "tailwind-styled-components";
// import { ReactComponent as Logo } from "../../static/image/Logo.svg";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../static/image/logo.png";
import LogoDark from "../../static/image/logoDark.png";

type HeaderType = {
  location: number;
};

const Header = (props: any) => {
  const location = useLocation();
  return (
    <EngSkyHeader location={location.pathname === "/" ? 1 : 0}>
      <StyledLink to="/" className="ml-10">
        {location.pathname === "/" ? (
          <img src={Logo} alt="" />
        ) : (
          <img src={LogoDark} alt="" />
        )}
      </StyledLink>
      <div>
        <StyledLink to="/booked" className="mr-10">
          예약내역
        </StyledLink>
        <StyledLink to="/cal" className="mr-10">
          달력
        </StyledLink>
      </div>
    </EngSkyHeader>
  );
};

export default Header;

const EngSkyHeader = tw.header<HeaderType>`
h-16 flex justify-between items-center relative z-20 
${(props: HeaderType) =>
  props.location === 1 ? "text-white" : "text-gray-600"}
`;

const StyledLink = tw(Link)`

`;
