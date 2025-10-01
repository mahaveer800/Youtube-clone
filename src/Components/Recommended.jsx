import React from "react";
import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import thumbnail4 from "../assets/thumbnail4.png";
import thumbnail5 from "../assets/thumbnail5.png";
import thumbnail6 from "../assets/thumbnail6.png";
import thumbnail7 from "../assets/thumbnail7.png";
import thumbnail8 from "../assets/thumbnail8.png";

const Recommended = () => {
  const Video = [
    thumbnail1,
    thumbnail2,
    thumbnail3,
    thumbnail4,
    thumbnail5,
    thumbnail6,
    thumbnail7,
    thumbnail8,
  ];

  return (
    <div className="flex flex-col gap-4 md:mt-12">
      {Video.map((card, i) => (
        <div
          key={i}
          className="flex gap-3 cursor-pointer hover:bg-gray-100 rounded-lg p-2 transition"
        >
          {/* Thumbnail */}
          <img
            src={card}
            alt={`video-${i}`}
            className="w-40 h-24 rounded-lg object-cover"
          />

          {/* Video Info */}
          <div className="flex flex-col justify-between">
            <h4 className="text-sm font-semibold line-clamp-2">
              Best channel that helps you to be a developer
            </h4>
            <p className="text-xs text-gray-500">GreatStack</p>
            <p className="text-xs text-gray-500">{2 * i}M views</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommended;
