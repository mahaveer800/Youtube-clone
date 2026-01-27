import React from "react";
import { X } from "lucide-react";

// Category Icons
import home from "../assets/home.png";
import game_icon from "../assets/game_icon.png";
import automobiles from "../assets/automobiles.png";
import sports from "../assets/sports.png";
import entertainment from "../assets/entertainment.png";
import tech from "../assets/tech.png";
import music from "../assets/music.png";
import blogs from "../assets/blogs.png";
import news from "../assets/news.png";

// Subscribed User Images
import jack from "../assets/jack.png";
import simon from "../assets/simon.png";
import tom from "../assets/tom.png";
import megan from "../assets/megan.png";
import cameron from "../assets/cameron.png";

const fallbackImage = "https://via.placeholder.com/24";

const Sidebar = ({ isOpen, setIsOpen, category, setCategory }) => {
  const Icon = [
    { id: 0, icon: home, label: "Home" },
    { id: 20, icon: game_icon, label: "Gaming" },
    { id: 2, icon: automobiles, label: "Automobiles" },
    { id: 17, icon: sports, label: "Sports" },
    { id: 24, icon: entertainment, label: "Entertainment" },
    { id: 28, icon: tech, label: "Technology" },
    { id: 10, icon: music, label: "Music" },
    { id: 22, icon: blogs, label: "Blogs" },
    { id: 25, icon: news, label: "News" },
  ];

  const Name = [
    { name: "Mahi", img: jack },
    { name: "Narendra", img: simon },
    { name: "Simron", img: cameron },
    { name: "Ajay", img: tom },
    { name: "Jay", img: megan },
  ];

  return (
    <div
      className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-52 sm:w-24 md:w-56 bg-zinc-200 shadow-md transform transition-transform duration-300 z-40 overflow-y-auto
      ${isOpen ? "translate-x-0" : "-translate-x-full"} 
      md:translate-x-0`}
    >
      <div className="md:hidden flex justify-end p-3">
        <button onClick={() => setIsOpen(false)}>
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="flex flex-col px-4 pb-6">
        {Icon.map((item, i) => (
          <div
            key={i}
            onClick={() => setCategory(item.id)}
            className={`flex items-center gap-3 cursor-pointer hover:bg-zinc-300 p-2 rounded-lg transition ${
              category === item.id ? "bg-zinc-300 font-semibold" : ""
            }`}
          >
            <img
              className="h-6 w-6 object-contain"
              src={item.icon || fallbackImage}
              alt={item.label}
              onError={(e) => (e.target.src = fallbackImage)}
            />
            <p className="text-sm md:flex hidden">{item.label}</p>
          </div>
        ))}

        <hr className="my-4" />

        <h3 className="font-semibold text-sm mb-2">Subscribed</h3>
        {Name.map((user, i) => (
          <div
            key={i}
            className="flex items-center gap-3 cursor-pointer hover:bg-zinc-300 p-2 rounded-lg transition"
          >
            <img
              className="h-6 w-6 rounded-full object-cover"
              src={user.img || fallbackImage}
              alt={user.name}
              onError={(e) => (e.target.src = fallbackImage)}
            />
            <p className="text-sm md:flex hidden">{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
