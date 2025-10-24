import React from 'react'
import { Playfair_Display } from 'next/font/google'
import Videos from './Videos';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // adjust as needed
  style: ['normal', 'italic'], // if you need italic
})

const videos = [
  { src: "/photo/WeddingVideo/Demo1.mp4", alt: "vid1" },
  { src: "/photo/WeddingVideo/Demo2.mp4", alt: "vid2" },
  { src: "/photo/WeddingVideo/Demo3.mp4", alt: "vid3" },
  { src: "/photo/WeddingVideo/Demo4.mp4", alt: "vid4" },
  { src: "/photo/WeddingVideo/Demo5.mp4", alt: "vid5" },
  { src: "/photo/WeddingVideo/Demo6.mp4", alt: "vid6" },
];

const Video = () => {


  return (
    <div className="py-20 mb-20">
      <section className="relative w-full overflow-hidden text-white">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            src="/photo/WeddingImage/Demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-90"
          ></video>

          {/* Top angled cut */}
          <div className="absolute top-0 w-full h-24 sm:h-40 bg-[#f0e9e0] [clip-path:polygon(0_0,100%_100%,100%_0)]"></div>

          {/* Bottom angled cut */}
          <div className="absolute bottom-0 w-full h-24 sm:h-50 bg-[#f0e9e0] [clip-path:polygon(0_102%,105%_102%,0_0)]"></div>
        </div>

        {/* Overlay Text */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] sm:min-h-[80vh] md:min-h-screen px-6 text-center ">
          <h1
            className={`${playfair.className} italic text-3xl sm:text-4xl md:text-6xl text-[#f7dcba] tracking-widest uppercase`}
          >
            Cinematic Weddings
          </h1>

          <p
            className={`${playfair.className} mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-white leading-relaxed`}
          >
            Every wedding is a story waiting to be told — and at{" "}
            <span className="font-semibold">KANYA STUDIO</span>, we believe in telling it
            with soul. Over the past 2 years, we’ve had the privilege of capturing love
            across cultures, moments that move us, and stories that deserve to be remembered
            forever. From quiet glances to grand celebrations, our films are crafted to
            reflect the emotion, beauty, and truth of your day.
          </p>
        </div>
      </section>

      <div className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-32 text-center">
        {/* Heading */}
        <h1
          className={`${playfair.className} italic text-3xl sm:text-4xl md:text-5xl font-bold flex items-center justify-center`}
        >
          Wedding Videos
        </h1>

        {/* Paragraph */}
        <div className="mt-8 flex justify-center">
          <p
            className={`${playfair.className} text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed max-w-6xl`}
          >
            At Kanya Studios, we celebrate the untamed, the fearless, the wanderers — the
            new-age, modern couples who aren't afraid to break tradition and create
            something uniquely their own. For us, wedding storytelling is more than just
            capturing beautiful frames. It's about understanding the essence of the
            couple — their energy, their personalities, and the vibe of their celebration.
            That belief has taken us from intimate weddings in cozy two-bedroom apartments
            to grand unions spread across continents.
            <br />
            <br />
            Every wedding has a soul, and our goal is to showcase that in the most honest,
            unfiltered way. Here are a few handpicked stories from recent years — a
            celebration of love, individuality, and the beauty of real moments.
          </p>
        </div>
      </div>


      {/* <button className={`${playfair.className}  ml-220 bg-[#a0884d] p-3 text-xs rounded-md flex items-center justify-center text-white`}>Videography more</button> */}
    </div>
  )
}

export default Video