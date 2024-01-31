import React from "react";
import Home from "./Home";
import View from "./View";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </Router>
  );
};

export default App;
