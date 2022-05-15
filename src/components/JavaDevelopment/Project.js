import React from "react";
import Slider from "./Slider";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineSearch,
  AiOutlineDownload,
} from "react-icons/ai";
import netflix from "../../assests/netflix.png";

const Project = () => {
  return (
    <div className="space-y-4 ml-[7.2rem] py-14 pr-3">
      <div className="font-bold text-4xl">Hands-on Projects</div>
      <div className="text-slate-700 text-[1rem] font-normal">
        Data sets from the industry
      </div>
      <div className="flex w-[100%] items-center">
        <div className="flex w-[50%] space-x-reverse space-x-4 mr-28">
          <div className="flex w-[15rem] space-x-2 rounded-lg shadow-xl p-4 py-4">
            <div className="bg-lime-400 rounded-full w-[4rem] p-[4px] h-[3.8rem] pt-[7px] pl-[7.3px]">
              <AiOutlineFundProjectionScreen style={{ fontSize: "45px" }} />
            </div>
            <div className="flex flex-col space-y-[0.3rem]">
              <div className="font-medium text-xl">1000+</div>
              <div className="text-slate-500 text-[1rem] font-normal">
                Project Completed
              </div>
            </div>
          </div>

          <div className="flex w-[15rem] space-x-2 rounded-lg shadow-xl p-4 py-4">
            <div className="bg-sky-600 rounded-full w-[4rem] p-[4px] h-[3.8rem] pt-[7px] pl-[7.3px]">
              <AiOutlineSearch style={{ fontSize: "45px" }} />
            </div>
            <div className="flex flex-col space-y-[0.3rem]">
              <div className="font-medium text-xl">22+</div>
              <div className="text-slate-500 text-[1rem] font-normal">
                Domain
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mr-5">
        <Slider />
      </div>
      <div className="flex justify-center items-center">
        <button
          type="button"
          className="text-white items-center justify-center flex space-x-3 bg-[#196ae5] h-[3.5rem] w-[15rem] text-lg rounded-md hover:shadow-lg hover:shadow-gray-400 duration-200 transition-all cursor-pointer">
          <div>Download Project List</div>
          <div>
            <AiOutlineDownload style={{ fontSize: "30px", color: "white" }} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Project;
