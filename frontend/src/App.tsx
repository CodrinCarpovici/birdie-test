import React from "react";

import "./App.css";

//Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CareRecipient from "./pages/CareRecipient";
import CareRecipient2 from "./pages/CareRecipient2";
import CareRecipient3 from "./pages/CareRecipient3";

//Router
import { Routes, Route } from "react-router-dom";
import BarChart from "./components/BarChart";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/will" element={<CareRecipient />} />
        <Route path="/daisy" element={<CareRecipient2 />} />
        <Route path="/jack" element={<CareRecipient3 />} />
      </Routes>
    </>
  );
}

export default App;
