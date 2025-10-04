import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu_icon from "../assets/menu.png";
import logo from "../assets/logo.png";
import search_icon from "../assets/search.png";
import upload_icon from "../assets/upload.png";
import more_icon from "../assets/more.png";
import notification_icon from "../assets/notification.png";
import profile_icon from "../assets/jack.png";

const Navbar = ({ setSearchTerm }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setSearchTerm(input);
    }
  };

  return (
    <>
      <nav className="flex h-16 bg-zinc-200 items-center px-2 justify-between fixed w-full z-50 text-xl">
        {/* Left - Menu + Logo */}
        <div className="flex items-center gap-3">
          <img
            className="h-5 cursor-pointer md:hidden"
            src={menu_icon}
            alt="menu"
            onClick={() => setSidebarOpen(true)}
          />
          <Link to="/" className="flex-shrink-0">
            <img className="h-7 md:h-10 cursor-pointer" src={logo} alt="logo" />
          </Link>
        </div>

        {/* Middle - Search */}
        <form
          onSubmit={handleSearch}
          className="relative w-48 sm:w-72 md:w-[40rem] mx-2 flex items-center"
        >
          <input
            type="text"
            placeholder="Search here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-white w-full px-4 rounded-full h-10 border border-zinc-300 text-black focus:outline-none focus:border-gray-500"
          />
          <button type="submit">
            <img
              src={search_icon}
              alt="search"
              className="h-5 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            />
          </button>
        </form>

        {/* Right - Icons */}
        <div className="flex items-center gap-4">
          <img src={upload_icon} alt="upload" className="hidden md:block h-6" />
          <img src={more_icon} alt="more" className="hidden md:block h-6" />
          <img
            src={notification_icon}
            alt="notification"
            className="hidden md:block h-6"
          />
          <img
            src={profile_icon}
            alt="profile"
            className="h-10 w-10 rounded-full cursor-pointer"
          />
        </div>
      </nav>

      {/* Sidebar for mobile */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setSidebarOpen(false)}
          ></div>

          <div className="fixed top-0 left-0 w-64 h-full bg-white z-50 p-4 shadow-lg transform transition-transform duration-300">
            <h2 className="font-bold text-lg mb-4">Sidebar Menu</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/" onClick={() => setSidebarOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/trending" onClick={() => setSidebarOpen(false)}>
                  Trending
                </Link>
              </li>
              <li>
                <Link to="/subscriptions" onClick={() => setSidebarOpen(false)}>
                  Subscriptions
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
