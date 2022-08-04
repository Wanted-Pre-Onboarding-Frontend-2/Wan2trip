import React from "react";
import { LayoutProps } from "../../types/types";
import tw from "tailwind-styled-components";
import { useModal } from "../../hooks/useModal";
import BackHeader from "./BackHeader";
import { Link, useLocation } from "react-router-dom";
import { moveToTop } from "../../hooks/moveToTop";
type Modal = {
  isshown: number;
};

const Layout = ({ children }: LayoutProps) => {
  const { isShown, toggle } = useModal();
  const location = useLocation();
  // console.log(isShown);
  return (
    <>
      {location.pathname === "/" ? <BackHeader /> : ""}
      <MoveToTop onClick={moveToTop}>Top</MoveToTop>
      <GlobalLayout isshown={isShown ? 1 : 0}>{children}</GlobalLayout>
    </>
  );
};

export default Layout;

const GlobalLayout = tw.div<Modal>`
 w-full h-auto min-h-screen max-w-5xl mx-auto 
 ${(props: Modal) =>
   props.isshown === 1 && "h-full fixed top-0 left-0 right-0 mx-auto"}
 ${(props: Modal) => props.isshown === 0 && "h-auto min-h-screen"}
`;

const MoveToTop = tw.button`
fixed bottom-5 right-5 bg-white w-10 h-10 rounded-full shadow-lg shadow-slate-500/50 hover:scale-105
`;
