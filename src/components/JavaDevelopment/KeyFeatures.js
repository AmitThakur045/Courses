import React from "react";
import { data } from "./data/keyFeaturesData.js";
import { AiOutlineCheckCircle } from "react-icons/ai";
const KeyFeatures = () => {
  return (
    <div className="px-[7.2rem] bg-[#f6fbff] py-20">
      <h1 className="font-semibold text-3xl">{data.mainHeading}</h1>
      <p className="mt-4 mb-8">{data.description}</p>
      <div className="space-y-4">
        <h1 className="font-bold text-xl">Key Features</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {data.features.map((feature, idx) => (
            <div className="flex items-center space-x-3">
              <AiOutlineCheckCircle size={"32px"} className="text-[#558ddd]" />
              <p>{feature.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
