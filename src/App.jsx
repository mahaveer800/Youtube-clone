import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import Landing from "./Components/Landing";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<Landing />} />

      {/* Main App */}
      <Route
        path="/home/*"
        element={
          <div className="flex flex-col h-screen">
            <Navbar setSearchTerm={setSearchTerm} />

            <div className="flex-1 overflow-y-auto bg-zinc-100">
              <Routes>
                <Route index element={<Home searchTerm={searchTerm} />} />
                <Route path="video/:categoryId/:videoId" element={<Video />} />
              </Routes>
            </div>
          </div>
        }
      />
    </Routes>
  );
};

export default App;
