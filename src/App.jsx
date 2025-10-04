import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";

const App = () => {
  const [searchTerm, setSearchTerm] = useState(""); // 🔹 Global search term

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar setSearchTerm={setSearchTerm} />

      {/* Routes */}
      <div className="flex-1 overflow-y-auto bg-zinc-100">
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} /> {/* ✅ Pass searchTerm */}
          <Route path="/video/:categoryId/:videoId" element={<Video />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
