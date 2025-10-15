"use client";
import React, { useRef } from "react";
import ReactPlayer from "react-player"; // ✅ Correct import

const Videos = () => {
  const players = useRef([]);

  // Add your Vimeo video links (must be public or embeddable)
  const video = [
    {src:"/public/photo/WeddingImage/Demo.mp4"}
  ];

  const handlePlay = (playingIndex) => {
    players.current.forEach((player, index) => {
      if (index !== playingIndex && player) {
        player.getInternalPlayer()?.pause?.();
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#F8F3EC] px-10 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {video.map((item, index) => (
          <div
            key={index}
            className="rounded-xl shadow-lg overflow-hidden bg-white p-2"
          >
            <ReactPlayer
              ref={(el) => (players.current[index] = el)}
              url={item.src}
              width="100%"
              height="250px"
              controls
              onPlay={() => handlePlay(index)}
            />
            <p className="text-center mt-3 text-lg font-medium text-gray-700">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
