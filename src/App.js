import React from "react";
import Header from "./components/Header";
import MainDisplay from "./components/MainDisplay";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <MainDisplay />
    </div>
  );
}

export default App;
