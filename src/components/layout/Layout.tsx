import React from "react";
import { LayoutProps } from "../../types/types";
import tw from "tailwind-styled-components";
import { useModal } from "../../hooks/useModal";

type Modal = {
  isshown: number;
};

const Layout = ({ children }: LayoutProps) => {
  const { isShown, toggle } = useModal();
  console.log(isShown);
  return <GlobalLayout isshown={isShown ? 1 : 0}>{children}</GlobalLayout>;
};

export default Layout;

const GlobalLayout = tw.div<Modal>`
 w-full h-auto min-h-screen max-w-5xl mx-auto 
 ${(props: Modal) =>
   props.isshown === 1 &&
   "h-full overflow-hidden fixed top-0 left-0 right-0 mx-auto"}
 ${(props: Modal) => props.isshown === 0 && "h-auto min-h-screen"}
`;
