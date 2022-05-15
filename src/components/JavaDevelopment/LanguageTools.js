import React from "react";
import { data } from "./data/contentData.js";
const LanguageTools = () => {
  return (
    <div className="px-[7.2rem]">
      <h1 className="font-bold text-[33px]">Languages and Tools covered</h1>
      <div className="flex items-center flex-wrap overflow-x-hidden">
        {data.languagesAndTools.map((language, idx) => (
          <img className="mr-16 my-6" src={language.lang} alt="" />
        ))}
        <p className="text-lg">and more...</p>
      </div>
    </div>
  );
};

export default LanguageTools;
