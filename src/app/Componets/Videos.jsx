"use client"

import React, { useEffect, useRef } from 'react'

const Videos = ({video}) => {
     const videoRefs = useRef([]);

  useEffect(() => {
    // Clear refs on remount
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, [video]);

  const handlePlay = (playingIndex) => {
    videoRefs.current.forEach((video, index) => {
      if (index !== playingIndex && video && !video.paused) {
        video.pause();
      }
    });
  };

  const videos = [
  { src: "/photo/WeddingVideo/Demo1.mp4", alt: "vid1" },
  { src: "/photo/WeddingVideo/Demo2.mp4", alt: "vid2" },
  { src: "/photo/WeddingVideo/Demo3.mp4", alt: "vid3" },
  { src: "/photo/WeddingVideo/Demo4.mp4", alt: "vid4" },
  { src: "/photo/WeddingVideo/Demo5.mp4", alt: "vid5" },
  { src: "/photo/WeddingVideo/Demo6.mp4", alt: "vid6" },
];
    return (
        <div>
            <div className="-mt-30 mb-50 grid grid-cols-2 justify-center items-center ml-55 mr-55">
                {videos.map((item, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            src={item.src}
                            controls
                            height={150}
                            width={400}
                            onPlay={() => handlePlay(index)}
                            className="rotate-[270deg] object-cover -mb-75"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Videos