import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar setSidebar={setSidebarOpen} />

      {/* Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        {/* Main Routes */}
        <div className="flex-1 overflow-y-auto bg-zinc-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/:categoryId/:videoId" element={<Video />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
