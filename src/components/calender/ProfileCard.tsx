import React from "react";

type member = {
  name: string;
  github: string;
  called: string;
  description: string;
  blog: string;
};

const ProfileCard = (data: member) => {
  return (
    <div className="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
      <img
        className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
        src="https://v-phinf.pstatic.net/20210710_23/1625895857059IrsGx_GIF/image.GIF?type=w1000"
        alt=""
      />
      <div className="text-center mt-2 text-3xl font-medium">{data.name}</div>
      <div className="text-center mt-2 font-light text-sm">
        <button onClick={() => window.open(data.github, "_blank")}>
          @{data.github.split("/")[3]}
        </button>
      </div>
      <div className="text-center font-normal text-lg mt-2">{data.called}</div>
      <div className="px-6 text-center mt-2 font-light text-sm">
        <p>{data.description}</p>
      </div>
      <hr className="mt-8" />
      <div className="flex p-4">
        <div className="w-full text-center">
          <button onClick={() => window.open(data.blog, "_blank")}>
            contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
