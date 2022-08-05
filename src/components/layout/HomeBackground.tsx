import React from "react";
import tw from "tailwind-styled-components";
import Back from "../../static/image/background.jpg";

const HomeBackground = () => {
  return (
    <div className="top-0 left-0 w-full bg-cover md:absolute ">
      <img
        src={Back}
        alt=""
        className="object-cover w-full min-h-400 md:h-full"
      />
    </div>
  );
};

export default HomeBackground;

const Background = tw.div`
 md:absolute object-cover md:h-1/2 top-0 left-0   object-cover
`;
