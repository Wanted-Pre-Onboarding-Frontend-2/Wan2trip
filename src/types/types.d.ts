import React from "react";

declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.woff";
declare module "postcss-nesting";
declare module "react-query";
declare module "react-query/devtools";
declare module "react-uuid";
declare module "react-use";

interface LayoutProps {
  children: React.ReactNode;
}

export { LayoutProps };
