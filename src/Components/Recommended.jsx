import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY, formatViews } from "../assets/data";
import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import thumbnail4 from "../assets/thumbnail4.png";
import thumbnail5 from "../assets/thumbnail5.png";
import thumbnail6 from "../assets/thumbnail6.png";
import thumbnail7 from "../assets/thumbnail7.png";
import thumbnail8 from "../assets/thumbnail8.png";

const Recommended = ({ category }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const fallbackThumbnails = [
    thumbnail1,
    thumbnail2,
    thumbnail3,
    thumbnail4,
    thumbnail5,
    thumbnail6,
    thumbnail7,
    thumbnail8,
  ];

  useEffect(() => {
const fetchData = async () => {
  try {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&videoCategoryId=${
      category || 0
    }&regionCode=IN&maxResults=20&key=${API_KEY}`;

        const res = await fetch(url);
        const result = await res.json();

        if (result.items && result.items.length > 0) {
          setData(result.items);
          setError(false);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError(true);
      }
    };

    fetchData();
  }, [category]);

  // ✅ Agar API fail ho jaye ya data empty ho to local thumbnails dikha do
  if (error || data.length === 0) {
    return (
      <div className="flex flex-col gap-4 md:mt-12">
        {fallbackThumbnails.map((thumb, i) => (
          <div
            key={i}
            className="flex gap-3 cursor-pointer hover:bg-gray-100 rounded-lg p-2 transition"
          >
            {/* Thumbnail */}
            <img
              src={thumb}
              alt={`local-video this is very harmful video-${i}`}
              className="w-40 h-24 rounded-lg object-cover"
            />

            {/* Dummy Info */}
            <div className="flex flex-col justify-between">
              <h4 className="text-sm font-semibold line-clamp-2">
                Local Video this is very harmful video {i + 1}
              </h4>
              <p className="text-xs text-gray-500">GreatStack</p>
              <p className="text-xs text-gray-500">{i + 1}M views</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // ✅ Normal case: API data available
  return (
    <div className="flex flex-col w-full gap-4 md:mt-12">
      {data.map((card, i) => {
        const snippet = card.snippet;
        const statistics = card.statistics;

        const thumbnail =
          snippet?.thumbnails?.medium?.url ||
          fallbackThumbnails[i % fallbackThumbnails.length];

        return (
         <Link
  to={`/video/${card.id?.videoId || card.id}`}   // <-- yahan fix
  key={card.id?.videoId || card.id || i}
  className="flex gap-3 cursor-pointer hover:bg-gray-100 rounded-lg p-2 transition"
>

            {/* Thumbnail */}
            <img
              src={thumbnail}
              alt={snippet?.title || `video-${i}`}
              className="w-48 h-28 rounded-lg object-cover"
            />

            {/* Video Info */}
            <div className="flex flex-col justify-between">
              <h4 className="text-sm font-semibold line-clamp-2">
                {snippet?.title || "Untitled Video"}
              </h4>
              <p className="text-xs text-gray-500">{snippet?.channelTitle}</p>
              <p className="text-xs text-gray-500">
                {formatViews(statistics?.viewCount || 0)} views
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
