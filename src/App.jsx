import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Chisiamo from "./chi-siamo";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<Chisiamo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
