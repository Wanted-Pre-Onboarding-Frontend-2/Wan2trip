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

interface Hotel {
  hotel_name: string;
  occupancy: {
    base: 2;
    max: 2 | 3 | 4 | 5 | 6;
  };
  rating: number;
  price: number;
  review: number;
  image: "https://source.unsplash.com/random";
}

interface LayoutProps {
  children: React.ReactNode;
}

export { Hotel, LayoutProps };
