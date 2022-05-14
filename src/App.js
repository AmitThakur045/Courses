import React from "react";
import Faculty from "./components/Faculty";
import Project from "./components/Project";
import Header from "./components/Header";
import MainDisplay from "./components/MainDisplay";
import Content from "./components/Content";
import LanguageTools from "./components/LanguageTools";

function App() {
  return (
    <div className="App">
      <Header />
      <MainDisplay />
      <Content />
      <LanguageTools />
      <Project />
      <Faculty />
    </div>
  );
}

export default App;
