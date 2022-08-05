import React from "react";
import ProfileCard from "../components/calender/ProfileCard";
import { Info } from "../static/constant/userInfo";
const About = () => {
  return (
    <div className="bg-gray-200 font-sans h-screen w-full flex flex-row justify-center items-center">
      {Info &&
        Info.map((member) => (
          <div key={member.name}>
            <ProfileCard {...member} />
          </div>
        ))}
    </div>
  );
};
export default About;
