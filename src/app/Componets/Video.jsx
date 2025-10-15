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
    <div className='py-20 mb-20'>
      <section className="relative w-full overflow-hidden text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <video src="/photo/WeddingImage/Demo.mp4" autoPlay loop muted></video>
          {/* Top angled cut */}
          <div className="absolute top-0 w-full h-40 bg-[#f0e9e0] [clip-path:polygon(0_0,100%_100%,100%_0)]"></div>
          {/* Bottom angled cut */}
          <div className="absolute bottom-0 w-full h-40 bg-[#f0e9e0] [clip-path:polygon(0_100%,100%_160,0_0)] ">
          </div>

        </div>



        {/* Overlay Text */}
        <div className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">
          <h1 className={`${playfair.className} italic text-4xl md:text-6xl  text-red-50  tracking-widest uppercase`}>Cinematic Weddings</h1>
          <p className={`${playfair.className} mt-6 max-w-4xl text-xl md:text-base text-white leading-relaxed`}>
            Every wedding is a story waiting to be told — and at KANYA STUDIO, we believe in telling it with soul.
            Over the past 2 years, we’ve had the privilege of capturing love across cultures, moments that move us,
            and stories that deserve to be remembered forever. From quiet glances to grand celebrations,
            our films are crafted to reflect the emotion, beauty, and truth of your day.
          </p>
        </div>
      </section>

      <div className='w-full py-20 '>
        <h1 className={`${playfair.className} italic flex items-center justify-center text-5xl font-bold`}>Wedding Videos</h1>
        <br />
       <div className='flex items-center mr-80 ml-80'>
         <p className={`${playfair.className} flex items-center text-center justify-center text-md `}> At Kanya Studios, we celebrate the untamed, the fearless, the wanderers — the new-age,
          modern couples who aren't afraid to break tradition and create something uniquely their own.
          For us, wedding storytelling is more than just capturing beautiful frames.
          It's about understanding the essence of the couple their energy, their personalities,
          and the vibe of their celebration. That belief has taken us from intimate weddings in
          cozy two-bedroom apartments to grand unions spread across continents.
          <br />
          <br />
          Every wedding has a soul, and our goal is to showcase that in the most honest, unfiltered way.
          Here are a few handpicked stories from recent years — a celebration of love, individuality, and the beauty of real moments.</p>
       </div>
      </div>
      {/* <div className="-mt-30  grid grid-cols-2 justify-center items-center ml-50 mr-50">
        {

          videos.map((item, index) => (
            <div key={index} className="flex justify-center items-center">
              <video
                src={item.src}
                controls
                height={150}
                width={400}
                className="rotate-[270deg] object-cover -mb-70"
              />
            </div>
          ))
        }
      </div> */}

      {/* <Videos/> */}
      {/* <button className={`${playfair.className}  ml-220 bg-[#a0884d] p-3 text-xs rounded-md flex items-center justify-center text-white`}>Videography more</button> */}
    </div>
  )
}

export default Video