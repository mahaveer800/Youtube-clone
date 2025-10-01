import React from "react";
import menu_icon from "../assets/menu.png";
import logo from "../assets/logo.png";
import serch_icon from "../assets/search.png";
import upload_icon from "../assets/upload.png";
import more_icon from "../assets/more.png";
import notification_icon from "../assets/notification.png";
import profile_icon from "../assets/jack.png";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex h-16 bg-zinc-200  items-center px-2 justify-between fixed w-full z-50">
      {/* Left - Menu + Logo */}
      <div className="flex items-center">
        <img
          className="h-6  cursor-pointer md:hidden"
          src={menu_icon}
          alt="menu"
          onClick={() => setSidebar(true)}
        />
        <img
          className=" h-6 md:h-10 sm:h-8 ml-8 cursor-pointer"
          src={logo}
          alt="logo"
        />
      </div>

      {/* Middle - Search */}
      <div className=" items-center relative w-[90%] sm:w-80 md:w-1/2 lg:w-[40%] mx-4">
        <input
          type="text"
          placeholder="Search here"
          className="bg-white w-full rounded-full pl-4 pr-10 h-10 border border-zinc-300 text-black"
        />
        <img
          src={serch_icon}
          alt="search"
          className="h-5 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <img src={upload_icon} alt="upload" className="hidden md:block h-6" />
        <img src={more_icon} alt="more" className="hidden md:block h-6" />
        <img src={notification_icon} alt="notification" className="hidden md:block h-6" />
        <img src={profile_icon} alt="profile" className="h-8 rounded-full cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
