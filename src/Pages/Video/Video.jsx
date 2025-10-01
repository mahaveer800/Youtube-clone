import React from 'react'
import PlayVideo from '../../Components/PlayVideo'
import Recommended from '../../Components/Recommended'

const Video = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      {/* Left side - Main video */}
      <div className="w-full lg:w-2/3">
        <PlayVideo />
      </div>

      {/* Right side - Recommended videos */}
      <div className="w-full lg:w-1/3">
        <Recommended />
      </div>
    </div>
  )
}

export default Video
