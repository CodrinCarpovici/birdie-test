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
        <Route index element={<Home />} />

        <Route path="/recipient1" element={<CareRecipient />} />
        <Route path="/recipient2" element={<CareRecipient2 />} />
        <Route path="/recipient3" element={<CareRecipient3 />} />
      </Routes>
    </>
  );
}

export default App;
