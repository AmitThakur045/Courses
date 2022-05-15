import React, { useRef } from "react";
import Faculty from "./components/Faculty";
import Project from "./components/Project";
import Header from "./components/Header";
import MainDisplay from "./components/MainDisplay";
import Content from "./components/Content";
import LanguageTools from "./components/LanguageTools";
import Testimonial from "./components/Testimonial";
import KeyFeatures from "./components/KeyFeatures";
import ContactUs from "./components/ContactUs";

function App() {
  const ref = useRef(null);
  return (
    <div className="App">
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
}

export default App;
