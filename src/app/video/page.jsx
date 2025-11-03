'use client'
import React, { useRef } from 'react'
import Header from '../Componets/Header'
import { Playfair_Display } from 'next/font/google'
import Footer from '../Componets/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // adjust as needed
  style: ['normal', 'italic'], // if you need italic
})

const page = () => {
  const videos = [
    { src: "/photo/WeddingVideo/Demo1.mp4", alt: "vid1" },
    { src: "/photo/WeddingVideo/Demo2.mp4", alt: "vid2" },
    { src: "/photo/WeddingVideo/Demo3.mp4", alt: "vid3" },
    { src: "/photo/WeddingVideo/Demo4.mp4", alt: "vid4" },
    { src: "/photo/WeddingVideo/Demo5.mp4", alt: "vid5" },
    { src: "/photo/WeddingVideo/Demo6.mp4", alt: "vid6" },
  ];

  const videoRefs = useRef([]);

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video) {
        video.pause(); // Pause all other videos
      }
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Header />
      </div>

      {/* Hero Video */}
      <div className="relative w-full h-[60vh] md:h-[100vh]">
        <video
          src="/photo/WeddingVideo/video.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        ></video>
        <h1
          className={`${playfair.className} absolute inset-0 flex items-center justify-center top-100 md:top-200 text-3xl md:text-6xl align-bottom text-white font-bold md:font-normal`}
        >
          RARE MOMENTS VIDEOS
        </h1>
      </div>

      {/* Wedding Videos */}
      <div className="container mx-auto mb-20 mt-20">
        {/* <h2 className="text-2xl font-bold mb-4 text-center">Wedding Videos</h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <div key={index} className="overflow-hidden  shadow-lg">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={video.src}
                controls
                className="w-full h-100 object-cover rotate-360"
                onPlay={() => handlePlay(index)}
              ></video>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default page
