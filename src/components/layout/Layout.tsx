import React from "react";
import { LayoutProps } from "../../types/types";
import tw from "tailwind-styled-components";

import Header from "./Header";

const Layout = ({ children }: LayoutProps) => {
  return <GlobalLayout>{children}</GlobalLayout>;
};

export default Layout;

const GlobalLayout = tw.div`
 w-full h-auto min-h-screen max-w-5xl mx-auto 
`;

const Inside = tw.div`
mt-16 w-full bg-sky-200 h-screen
`;
