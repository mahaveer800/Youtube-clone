import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";  
import { API_KEY,formatViews } from "../assets/data";
import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import thumbnail4 from "../assets/thumbnail4.png";
import thumbnail5 from "../assets/thumbnail5.png";
import thumbnail6 from "../assets/thumbnail6.png";
import thumbnail7 from "../assets/thumbnail7.png";
import thumbnail8 from "../assets/thumbnail8.png";


const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fallbackThumbnails = [
    thumbnail1, thumbnail2, thumbnail3, thumbnail4,
    thumbnail5, thumbnail6, thumbnail7, thumbnail8
  ];

useEffect(() => {
  const fetchData = async () => {
    try {
      const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&videoCategoryId=${category}&regionCode=IN&maxResults=50&key=${API_KEY}`;

      const res = await fetch(url);
      const result = await res.json();
      setData(result.items);
    } catch (err) {
      console.error("Error fetching videos:", err);
    }
  };

  fetchData();
}, [category]);

  return (
    <div className="mt-16 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.length > 2 ? (
        data.map((item, i) => (
          <Link
            key={item.id}
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            className="bg-white rounded-sm overflow-hidden shadow hover:shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={item.snippet.thumbnails.medium.url || fallbackThumbnails[i % fallbackThumbnails.length]}
              alt={item.snippet?.title}
              className="w-full aspect-video object-cover"
            />
            <div className="p-2">
              <h3 className="font-semibold text-sm truncate">{item.snippet.title}</h3>
              <p className="text-xs text-gray-600">{item.snippet.channelTitle}</p>
            <p className="text-xs text-gray-500">
  {formatViews(item.statistics?.viewCount)} views • 2 days ago
</p>


            </div>
          </Link>
        ))
      ) : (
        <p>Loading videos...</p>
      )}
    </div>
  );
};

export default Feed;
