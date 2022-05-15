import React from "react";
import ContactUs from "../ContactUs";
import Header from "../Header";
import Content from "./Content";
import Faculty from "./Faculty";
import KeyFeatures from "./KeyFeatures";
import LanguageTools from "./LanguageTools";
import MainDisplay from "./MainDisplay";
import Project from "./Project";
import Testimonial from "./Testimonial";

const DataScience = () => {
  return (
    <div className="">
      <Header />
      <MainDisplay />
      <KeyFeatures />
      <Content />
      <LanguageTools />
      <Project />
      <Faculty />
      <Testimonial />

      <ContactUs />
    </div>
  );
};

export default DataScience;
