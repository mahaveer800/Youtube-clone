import React from "react";
import { X } from "lucide-react";

import home from "../assets/home.png";
import game_icon from "../assets/game_icon.png";
import automobiles from "../assets/automobiles.png";
import sports from "../assets/sports.png";
import entertainment from "../assets/entertainment.png";
import tech from "../assets/tech.png";
import music from "../assets/music.png";
import blogs from "../assets/blogs.png";
import news from "../assets/news.png";

import jack from "../assets/jack.png";
import simon from "../assets/simon.png";
import tom from "../assets/tom.png";
import megan from "../assets/megan.png";
import cameron from "../assets/cameron.png";

const Sidebar = ({ isOpen, setIsOpen }) => {



   const Icon =[
            { icon: home, label: "Home" },
            { icon: game_icon, label: "Gaming" },
            { icon: automobiles, label: "Automobiles" },
            { icon: sports, label: "Sports" },
            { icon: entertainment, label: "Entertainment" },
            { icon: tech, label: "Technology" },
            { icon: music, label: "Music" },
            { icon: blogs, label: "Blogs" },
            { icon: news, label: "News" },
          ]

          const Name = [
            { name: "Mahi", img: jack },
            { name: "Narendra", img: simon },
            { name: "Simron", img: cameron },
            { name: "Ajay", img: tom },
            { name: "Jay", img: megan },
          ]
  return (
 

    <>
      <div
        className={`fixed top-14 left-0 h-full sm:w-24 md:w-56 md:mt-14 bg-zinc-200 shadow-md transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static`}
      >
        {/* Close button for mobile */}
        <div className="md:hidden flex justify-end p-3">
          <button onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Sidebar content */}
        <div className="flex flex-col px-4 overflow-y-auto h-full">
          {
          Icon.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 cursor-pointer hover:bg-zinc-300 p-2 rounded-md"
            >
              <img className="h-6" src={item.icon} alt={item.label} />
              <p className="hidden md:flex">{item.label}</p>
            </div>
          ))}

          <hr className="my-3" />

          <h3 className="font-semibold text-sm">Subscribed</h3>
          {
          Name.map((user, i) => (
            <div
              key={i}
              className="flex items-center gap-1 cursor-pointer hover:bg-zinc-300 p-2 rounded-md"
            >
              <img className="h-6 rounded-full" src={user.img} alt={user.name} />
              <p className="hidden md:flex">{user.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-30"
        />
      )}
    </>
  );
};

export default Sidebar;
