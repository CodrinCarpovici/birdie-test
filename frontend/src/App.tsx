import "./App.css";

//Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CareRecipient from "./pages/CareRecipient";

//Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/person/:id/*" element={<CareRecipient />} />
        <Route path="/person/:id/*" element={<CareRecipient />} />
      </Routes>
    </>
  );
}

export default App;
