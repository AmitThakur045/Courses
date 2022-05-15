import React from "react";
import { data } from "../data/mainDisplayData.js";
import { PhoneFilled, PlayCircleFilled } from "@ant-design/icons";
import mainPage from "../assests/DataScienceMainPage.PNG";
const MainDisplay = () => {
  return (
    <div
      className="h-[36rem] w-full flex"
      style={{
        backgroundImage: `url(${data.courseImage})`,
        backgroundSize: "cover",
      }}>
      <div className="flex-[0.5] flex flex-col justify-center space-y-5">
        <div className="bg-white w-[85%] h-[28rem] rounded-md flex flex-col px-8 py-8 space-y-6 self-end">
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
          <div className="space-x-5">
            <button
              type="button"
              className="text-white bg-[#196ae5] h-[3.5rem] w-[15rem] text-lg rounded-md hover:shadow-lg hover:shadow-gray-400 duration-200 transition-all cursor-pointer">
              Download Brochure
            </button>
            <button
              type="button"
              className="text-black border-[1px] border-black h-[3.5rem] w-[15rem] text-lg rounded-md hover:shadow-lg hover:shadow-gray-400 duration-200 transition-all cursor-pointer">
              Contact Us
            </button>
          </div>

          <p className="text-[#e99e5d] font-semibold">
            Application Close
            <span className="text-[#e7832a] font-bold ml-1">
              {data.closeData}
            </span>
          </p>
        </div>
        <div className="text-white flex items-center space-x-3 self-start ml-[7.2rem] opacity-70 cursor-pointer hover:opacity-90 transition-all duration-100">
          <PhoneFilled className="border-2 border-white px-[2px] py-[2px]" />
          <p className="">Enquire {data.call}</p>
        </div>
      </div>
      <div className="flex-[0.5] flex items-center justify-center text-white"></div>
    </div>
  );
};

export default MainDisplay;
