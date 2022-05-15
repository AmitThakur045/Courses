import React from "react";
import Slider from "./Slider";
import {
  FundProjectionScreenOutlined,
  SearchOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import netflix from "../assests/netflix.png";

const Project = () => {
  return (
    <div className="space-y-4 ml-[7.2rem] py-14 pr-3">
      <div className="font-bold text-4xl">Hands-on Projects</div>
      <div className="text-slate-700 text-[1rem] font-normal">
        Data sets from the industry
      </div>
      <div className="flex w-[100%] items-center">
        <div className="w-[50%]">
          <img src={netflix} className="w-[20rem]" />
        </div>
        <div className="flex w-[50%] space-x-4 flex-row-reverse mr-28">
          <div className="flex w-[15rem] space-x-2 rounded-lg shadow-xl p-4 py-4">
            <div className="bg-lime-400 rounded-full lg:w-[4rem] p-[4px] lg:h-[3.8rem] md:w-[2rem] md:h-[1.5rem] sm:w-[2rem] md-[1.5rem] pt-[7px] pl-[7.3px]">
              <FundProjectionScreenOutlined style={{ fontSize: "45px" }} />
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
              <SearchOutlined style={{ fontSize: "45px" }} />
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
        <div className="flex bg-blue-700 w-[19.3rem] space-x-3 p-2 rounded-md justify-center items-center">
          <button className="font-normal text-[1.2rem] text-white">
            Download Project List
          </button>
          <div>
            <DownloadOutlined style={{ fontSize: "30px", color: "white" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
