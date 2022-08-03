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
      <StyledLink to="/" className="ml-5 md:ml-0">
        {location.pathname === "/" ? (
          <>
            <img src={Logo} alt="" className="w-32 hidden md:block" />
            <img src={LogoDark} alt="" className="w-32 md:hidden" />
          </>
        ) : (
          <img src={LogoDark} alt="" className="w-32" />
        )}
      </StyledLink>
      <div>
        <StyledLink to="/booked" className="mr-10 text-black md:text-white">
          예약내역
        </StyledLink>
        <StyledLink
          to="/result"
          className="mr-8 text-black md:text-white md:mr-0"
        >
          검색
        </StyledLink>
      </div>
    </EngSkyHeader>
  );
};

export default Header;

const EngSkyHeader = tw.header<HeaderType>`
fixed md:relative top-0 left-0 w-full py-3 z-10 flex justify-between items-center z-20  bg-white border-b md:px-3 lg:px-0 md:border-b-0 md:bg-transparent
${(props: HeaderType) =>
  props.location === 1 ? "text-white" : "text-gray-600"}
`;

const StyledLink = tw(Link)`

`;
