// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavbarDesktop from "./components/CustomNavbarDesktop";
import CustomNavbarMobile from "./components/CustomNavbarMobile";
import Home from "./components/Home";
import Playlist from "./components/Playlist";
import "./style/App.css";
import CustomFooter from "./components/CustomFooter";

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column flex-lg-row flex-grow-1">
        {/* Navbar Desktop */}
        <CustomNavbarDesktop />
        {/* Navbar Mobile */}
        <CustomNavbarMobile />

        {/* Contenuto */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playlist" element={<Playlist />} />
          </Routes>
        </div>
      </div>
      <CustomFooter />
    </BrowserRouter>
  );
};

export default App;
