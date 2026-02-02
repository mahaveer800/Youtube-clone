import React, { useState } from "react";
import PlayVideo from "../../Components/PlayVideo";
import Recommended from "../../Components/Recommended";
import { useParams, useNavigate } from "react-router-dom";

const Video = () => {
  const { videoId, categoryId } = useParams();
  const navigate = useNavigate();
  const [currentVideoId, setCurrentVideoId] = useState(videoId);

  const handleVideoClick = (id) => {
  setCurrentVideoId(id);
  navigate(`/home/video/${categoryId || 0}/${id}`);
};


  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      {/* Main video */}
      <div className="w-full lg:w-2/3">
        <PlayVideo videoId={currentVideoId} />
      </div>

      {/* Recommended */}
      <div className="w-full lg:w-1/3">
        <Recommended categoryId={categoryId} onVideoClick={handleVideoClick} />
      </div>
    </div>
  );
};

export default Video;
