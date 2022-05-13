import React from "react";
import { data } from "../data/mainDisplayData.js";
const MainDisplay = () => {
  return (
    <div
      className="h-[34rem] w-full flex"
      style={{
        backgroundImage: `url(${data.courseImage})`,
        backgroundSize: "cover",
      }}>
      <div className="flex-[0.5] flex flex-col items-end justify-center">
        <div className="bg-white w-[85%] h-[28rem] rounded-md flex flex-col px-8 py-8 space-y-6">
          <img
            src={data.courseLogo}
            className="h-[2.5rem] object-cover w-[12rem]"
            alt=""
          />
          <h1 className="font-semibold text-4xl">{data.mainHeading}</h1>
          <div className="flex justify-center">
            <p className="flex-[0.5]">{data.courseName}</p>
            <img
              className="flex-[0.5] h-[3rem] object  w-[3rem]"
              src={data.extraImage}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex-[0.5]"></div>
    </div>
  );
};

export default MainDisplay;
