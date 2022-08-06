import React from "react";
import tw from "tailwind-styled-components";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../static/image/logo.png";
import LogoDark from "../../static/image/logoDark.png";
import { useDark } from "../../hooks/useDark";
import { useMediaQuery } from "../../hooks/useMediaQuery";
type HeaderType = {
  location: number;
};

const Header = (props: any) => {
  const location = useLocation();
  const { isDarkMode, toggle, enable, disable } = useDark();
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <EngSkyHeader location={location.pathname === "/" ? 1 : 0}>
      <StyledLink to="/" className="ml-5 md:ml-0">
        {location.pathname === "/" || isDarkMode ? (
          <>
            <img src={Logo} alt="" className="w-32" />
          </>
        ) : (
          <img src={LogoDark} alt="" className="w-32" />
        )}

        {!matches && !isDarkMode && (
          <img src={LogoDark} alt="" className="w-32 fixed top-3 left-5" />
        )}
      </StyledLink>
      <div>
        <StyledLink
          to="/booked"
          className={
            location.pathname === "/"
              ? "text-gray-600 md:text-white rounded-md border-slate-200 border px-4 py-2 hover:font-bold dark:text-white"
              : null
          }
        >
          예약내역
        </StyledLink>
        <button
          onClick={toggle}
          className={
            location.pathname === "/"
              ? "ml-3 text-gray-600 md:text-white rounded-md border-slate-200 border px-4 py-2 hover:font-bold"
              : "ml-3 text-gray-600 dark:text-white"
          }
        >
          다크모드
        </button>
      </div>
    </EngSkyHeader>
  );
};

export default Header;

const EngSkyHeader = tw.header<HeaderType>`
fixed md:relative top-0 left-0 w-full py-3 pr-3 z-10 flex justify-between items-center bg-white dark:bg-gray-800 border-b md:px-3 lg:px-0 md:border-b-0 md:bg-transparent 
dark:md:bg-transparent 
${(props: HeaderType) =>
  props.location === 1 ? "text-white" : "text-gray-600 dark:text-white"}
`;

const StyledLink = tw(Link)`

`;
