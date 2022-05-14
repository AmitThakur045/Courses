import React from "react";
import photo from "../assests/sample.png";

const SampleData = () => {
  return (
    <div className="flex space-x-3 border-2 rounded-lg shadow-sm p-3 hover:shadow-lg cursor-pointer transition-all duration-200">
      <div className="bg-slate-200 rounded-lg h-[13rem] w-[13rem] p-[4rem]">
        <img src={photo} alt="logo" />
      </div>
      <div className="flex flex-col space-y-3 justify-between">
        <div className="flex flex-col space-y-6 justify-start">
          <div className="text-slate-500 text-[1.1rem] font-light w-[32rem] flex items-start">
            Real Estate
          </div>
          <div className="font-medium text-2xl w-[32rem] flex items-start">
            House Price Prediction
          </div>
        </div>
        <div className="text-sky-600 text-1xl w-[32rem] flex items-start">
          LEARN MORE
        </div>
      </div>
    </div>
  );
};

export default SampleData;
