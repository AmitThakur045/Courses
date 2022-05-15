import React from "react";
import Faculty from "./components/Faculty";
import Project from "./components/Project";
import Header from "./components/Header";
import MainDisplay from "./components/MainDisplay";
import Content from "./components/Content";
import LanguageTools from "./components/LanguageTools";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="App">
      <Header />
      <MainDisplay />
      <Content />
      <LanguageTools />
      <Project />
      <Faculty />
      <Testimonial />
    </div>
  );
}

export default App;
