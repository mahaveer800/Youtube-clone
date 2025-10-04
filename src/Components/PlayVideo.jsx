import React, { useState, useEffect } from "react";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import jack from "../assets/jack.png";
import user_profile from "../assets/user_profile.jpg";
import { API_KEY, formatViews } from "../assets/data";

const PlayVideo = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [videoData, setVideoData] = useState(null);
  const [channelData, setChannelData] = useState(null);

  const handleComment = () => {
    if (!newComment.trim()) return;
    const newEntry = {
      id: Date.now(),
      username: "You",
      profile: user_profile,
      text: newComment,
      time: "Just now",
    };
    setComments([newEntry, ...comments]);
    setNewComment("");
  };

  const fetchVideoAndChannel = async () => {
    try {
      // Fetch video data
      const videoRes = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
      );
      const videoJson = await videoRes.json();
      if (videoJson.items?.length > 0) {
        setVideoData(videoJson.items[0]);
        const channelId = videoJson.items[0].snippet.channelId;

        // Fetch channel data
        const channelRes = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`
        );
        const channelJson = await channelRes.json();
        if (channelJson.items?.length > 0) setChannelData(channelJson.items[0]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (videoId) fetchVideoAndChannel();
  }, [videoId]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-14 sm:mt-20 md:mt-14">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&disablekb=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full aspect-video rounded-lg shadow-lg"
        title="YouTube video"
      ></iframe>

      <div className="mt-2">
        <h2 className="text-lg font-semibold">{videoData?.snippet?.title || "Loading..."}</h2>
        {videoData && (
          <p className="text-sm text-gray-600">
            {formatViews(videoData.statistics.viewCount)} views •{" "}
            {new Date(videoData.snippet.publishedAt).toDateString()}
          </p>
        )}
      </div>

      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {channelData ? (
            <>
              <img
                src={channelData.snippet.thumbnails.default.url}
                alt={channelData.snippet.title}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-sm">{channelData.snippet.title}</h3>
                <p className="text-xs text-gray-500">
                  {formatViews(channelData.statistics.subscriberCount)} subscribers
                </p>
              </div>
            </>
          ) : (
            <>
              <img src={jack} alt="Channel" className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="font-semibold text-sm">Loading...</h3>
                <p className="text-xs text-gray-500">-- subscribers</p>
              </div>
            </>
          )}
          <button className="ml-4 px-4 py-1 bg-red-600 text-white rounded-full text-sm">Subscribe</button>
        </div>

        <div className="flex gap-2">
          <button className="flex items-center gap-1">
            <img src={like} alt="Like" className="w-5" />
            <span className="text-sm">{videoData ? formatViews(videoData.statistics.likeCount || 0) : 0}</span>
          </button>
          <button className="flex items-center gap-1">
            <img src={dislike} alt="Dislike" className="w-5" />
          </button>
          <button className="flex items-center gap-1">
            <img src={share} alt="Share" className="w-5" />
            <span className="text-sm">Share</span>
          </button>
          <button className="flex items-center gap-1">
            <img src={save} alt="Save" className="w-5" />
            <span className="text-sm">Save</span>
          </button>
        </div>
      </div>

      {/* Comments */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">{comments.length} Comments</h3>
        <div className="flex items-start gap-3 mb-6">
          <img src={user_profile} alt="Your profile" className="w-10 h-10 rounded-full" />
          <div className="flex-1">
            <input
              type="text"
              placeholder="Add a public comment..."
              className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-500 text-sm p-1"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleComment()}
            />
            <div className="flex justify-end gap-2 mt-2">
              <button onClick={() => setNewComment("")} className="text-sm px-3 py-1 rounded-md hover:bg-gray-200">Cancel</button>
              <button onClick={handleComment} className="text-sm px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700">Comment</button>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {comments.map(c => (
            <div key={c.id} className="flex items-start gap-3">
              <img src={c.profile} alt={c.username} className="w-10 h-10 rounded-full" />
              <div>
                <p className="text-sm font-semibold">{c.username} <span className="text-xs text-gray-500 ml-1">{c.time}</span></p>
                <p className="text-sm">{c.text}</p>
                <div className="flex gap-4 mt-1 text-xs text-gray-500">
                  <button>👍 Like</button>
                  <button>👎 Dislike</button>
                  <button>Reply</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
