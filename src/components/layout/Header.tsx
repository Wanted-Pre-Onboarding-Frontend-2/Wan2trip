import React from "react";
import tw from "tailwind-styled-components";
// import { ReactComponent as Logo } from "../../static/image/Logo.svg";
import { Link } from "react-router-dom";

const Header = (props: any) => {
  return (
    <EngSkyHeader>
      <StyledLink to="/" className="ml-10">
        Wan2trip
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

const EngSkyHeader = tw.header`
bg-sky-400 h-16 flex justify-between items-center relative z-20
`;

const StyledLink = tw(Link)`
text-white
`;
