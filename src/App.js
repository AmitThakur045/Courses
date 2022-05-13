import React from "react";
import Faculty from "./components/Faculty";
import Project from "./components/Project";
import Header from "./components/Header";
import MainDisplay from "./components/MainDisplay";

function App() {
  return (
    <div className="App">
      <Header />
      <MainDisplay />
      <Project />
      <Faculty />
    </div>
  );
}

export default App;
