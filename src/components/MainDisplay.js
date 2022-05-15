import React from "react";
import { data } from "../data/mainDisplayData.js";
import { AiFillPhone } from "react-icons/ai";
import mainPage from "../assests/DataScienceMainPage.PNG";
import { Link } from "react-scroll";
const MainDisplay = () => {
  return (
    <div
      className="h-[30rem] w-full flex"
      style={{
        backgroundImage: `url(${data.courseImage})`,
        backgroundSize: "cover",
      }}>
      <div className="lg:flex-[0.7] xl:flex-[0.6] 2xl:flex-[0.5] flex-[0.9]  flex flex-col justify-center space-y-5">
        <div className="bg-white w-[85%] rounded-md flex flex-col px-8 py-8 space-y-6 self-end">
          <h1 className="font-semibold text-4xl">{data.mainHeading}</h1>
          <div className="flex">
            <p className="flex-[0.8] text-[20px] opacity-[0.7]">
              {data.courseName}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <span className="text-[#ffb900] text-lg">
                &#9733; &#9733; &#9733; &#9733;
                <span className="text-[#dcdcdc] text-lg"> &#9733;</span>
              </span>

              <p className="ml-1 opacity-70">{data.rating} Ratings</p>
            </div>
            <span className="opacity-70">&#9642;</span>
            <p className="opacity-70">{data.months} Months</p>
            <span className="opacity-70">&#9642;</span>
            <p className="opacity-70">{data.detail}</p>
          </div>
          <div className="space-x-5 ">
            <button
              type="button"
              className="text-white bg-[#196ae5] h-[3rem] w-[10rem] lg:h-[3.5rem] lg:w-[15rem] text-lg rounded-md hover:shadow-lg hover:shadow-gray-400 duration-200 transition-all cursor-pointer">
              Download Brochure
            </button>
            <button
              type="button"
              className="text-black border-[1px] border-black  h-[3rem] w-[10rem]lg:h-[3.5rem] lg:w-[15rem] text-lg rounded-md hover:shadow-lg hover:shadow-gray-400 duration-200 transition-all cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex-[0.3] xl:flex-[0.4] 2xl:flex-[0.5] flex-[0.1]  flex items-center justify-center text-white"></div>
    </div>
  );
};

export default MainDisplay;
