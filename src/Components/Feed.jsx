import React from "react";
import { Link } from "react-router-dom";  
import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import thumbnail4 from "../assets/thumbnail4.png";
import thumbnail5 from "../assets/thumbnail5.png";
import thumbnail6 from "../assets/thumbnail6.png";
import thumbnail7 from "../assets/thumbnail7.png";
import thumbnail8 from "../assets/thumbnail8.png";

const Feed = () => {
  const cardImg = [
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
    <div className="mt-14 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cardImg.map((card, i) => (
        <Link
          to={`/video/20/4521`} // ✅ Correct usage
          key={i} // ✅ Unique key
          className="bg-white shadow rounded-lg overflow-hidden cursor-pointer"
        >
          <img
            src={card}
            alt="video thumbnail"
            className="w-full h-40 object-cover"
          />
          <div className="p-2">
            <h3 className="font-semibold text-sm">Video Title</h3>
            <p className="text-xs text-gray-600">
              Channel Name • {4 * (i * 3)}M views
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
