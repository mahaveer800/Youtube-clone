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

const categoryLabels = {
  0: "Home",
  20: "Gaming",
  2: "Automobiles",
  17: "Sports",
  24: "Entertainment",
  28: "Technology",
  10: "Music",
  22: "Blogs",
  25: "News",
};

const Feed = ({ category, searchTerm }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
      setLoading(true);
      try {
        let url = "";

        if (searchTerm && searchTerm.trim() !== "") {
          url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=40&q=${encodeURIComponent(
            searchTerm
          )}&regionCode=IN&key=${API_KEY}`;
        } else {
          url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&videoCategoryId=${category}&regionCode=IN&maxResults=40&key=${API_KEY}`;
        }

        const res = await fetch(url);
        const result = await res.json();

        if (result.items && result.items.length > 0) {
          setData(result.items);
        } else {
          const label = categoryLabels[category] || "Trending";
          const fallbackUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=40&q=${encodeURIComponent(
            label
          )}&regionCode=IN&key=${API_KEY}`;
          const fallbackRes = await fetch(fallbackUrl);
          const fallbackResult = await fallbackRes.json();
          setData(fallbackResult.items || []);
        }
      } catch (err) {
        console.error("Error fetching videos:", err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, searchTerm]);

  return (
    <div className="mt-20 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {loading ? (
        <p className="text-center text-gray-600 col-span-full">
          Loading videos...
        </p>
      ) : data.length > 0 ? (
        data.map((item, i) => {
          const videoId = item.id?.videoId || item.id;
          const snippet = item.snippet;
          if (!snippet) return null;

          return (
            <Link
              key={videoId}
              to={`/video/${category}/${videoId}`}
              className="bg-white rounded-md overflow-hidden shadow hover:shadow-lg hover:scale-105 transition-transform duration-200"
            >
              <img
                src={
                  snippet?.thumbnails?.medium?.url ||
                  fallbackThumbnails[i % fallbackThumbnails.length]
                }
                alt={snippet?.title}
                className="w-full aspect-video object-cover"
              />
              <div className="p-2">
                <h3 className="font-semibold text-sm line-clamp-2">
                  {snippet?.title}
                </h3>
                <p className="text-xs text-gray-600">
                  {snippet?.channelTitle}
                </p>
                {item.statistics && (
                  <p className="text-xs text-gray-500">
                    {formatViews(item.statistics?.viewCount)} views
                  </p>
                )}
              </div>
            </Link>
          );
        })
      ) : (
        <p className="text-center text-gray-600 col-span-full">
          No videos found.
        </p>
      )}
    </div>
  );
};

export default Feed;
