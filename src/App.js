import React from "react";
import { Routes, Route } from "react-router-dom";
import DataScience from "./components/DataScience/DataScience";
import JavaDevelopment from "./components/JavaDevelopment/JavaDevelopment";
function App() {
  return (
    <Routes>
      <Route path="/data-science" element={<DataScience />} />
      <Route path="/java-development" element={<JavaDevelopment />} />
    </Routes>
  );
}

export default App;
