import {
  CaretDownOutlined,
  CaretUpOutlined,
  ClockCircleFilled,
  DownloadOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { data } from "../data/contentData";

const Content = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="my-14 px-[7.2rem]">
      <div className="flex">
        <div className="flex-[0.25] ">
          <div className=" h-[35rem]  bg-[#f8f8f8] flex flex-col items-center  py-6 px-14 rounded-md">
            <h1 className="font-[600] text-3xl text-center">
              Comprehensive Curriculum
            </h1>
            <p className="text-center font-[450] text-base my-3">
              {data.contentDescription}
            </p>
            <div className="bg-white flex shadow-md rounded-md px-3 py-2 w-[16rem] mt-4 space-x-3">
              <ClockCircleFilled
                style={{ color: "#00C48C" }}
                className="text-[3rem] self-center"
              />
              <div className="">
                <h1 className="font-bold text-2xl">
                  {data.learningContent} hrs
                </h1>
                <p className="text-lg">Learning content</p>
              </div>
            </div>
            <div className="bg-white flex shadow-md rounded-md px-3 py-2 w-[16rem] mt-4 space-x-3">
              <ToolOutlined
                style={{ color: "white" }}
                className="text-[2rem] self-center bg-[#97a0fa] rounded-full p-2"
              />
              <div className="">
                <h1 className="font-bold text-2xl">{data.languages}</h1>
                <p className="text-lg">Languages & Tools</p>
              </div>
            </div>
            <button
              type="button"
              className="text-white bg-[#196ae5] h-[3.5rem] w-[17rem] text-xl rounded-md hover:shadow-lg hover:shadow-gray-400 duration-200 transition-all cursor-pointer my-5 flex items-center justify-center space-x-2">
              <p className="mt-4">Download Curriculum</p>
              <DownloadOutlined />
            </button>
          </div>
        </div>
        <div className="flex-[0.75]">
          <div className=" ml-10 space-y-10">
            {data.courseContent.map((section, sectionIdx) => (
              <div key={sectionIdx} className="">
                <h1 className="text-[20px]">{section.sectionName}</h1>
                <p className="text-[17px] opacity-80">
                  {section.sectionDescription}
                </p>
                <div className="space-y-7">
                  {section.lesson.map((les, lessonIdx) => (
                    <Collapsible
                      key={lessonIdx}
                      trigger={
                        <div className="flex justify-between mx-5 items-center  h-[4rem] opacity-80">
                          <p className="mt-3">{les.lessonName}</p>
                          {open ? <CaretUpOutlined /> : <CaretDownOutlined />}
                        </div>
                      }
                      onOpen={() => setOpen(true)}
                      onClose={() => setOpen(false)}
                      className="border-2 rounded-md"
                      triggerClassName="text-lg font-bold h-[4rem]"
                      triggerOpenedClassName="text-lg font-bold h-[4rem]"
                      openedClassName=" border-2 rounded-md"
                      contentOuterClassName="">
                      <div className="border-t-2 rounded-md flex flex-col px-8 py-6">
                        <h1 className="px-6 font-normal text-[15px] mb-6">
                          {les.lessonDescription}
                        </h1>
                        <div className="space-y-6">
                          {les.topic.map((top, topicIdx) => (
                            <div key={topicIdx} className="mx-3">
                              <div className="flex">
                                <span>&#9642;</span>
                                <h1 className="pl-2 text-lg opacity-80">
                                  {top.topicName}
                                </h1>
                              </div>
                              <p className="pl-3 text-[14px] opacity-90">
                                {top.topicDescription}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Collapsible>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
