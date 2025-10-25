import React from 'react'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // adjust as needed
  style: ['normal', 'italic'], // if you need italic
})

const page = () => {
  return (
    <div className='relative'>
      <div className="absolute top-0 left-0 w-full z-10">
        <Header />
      </div>
      <div className="relative w-full h-[60vh] md:h-[100vh]">
        <video src="/photo/WeddingVideo/Aboutus.mp4" autoPlay loop muted className="w-full h-full object-cover"></video>

        <h1 className={`${playfair.className} absolute inset-0 flex items-center justify-center top-100 md:top-200 text-3xl md:text-7xl align-bottom text-white font-bold md:font-normal`}>
          ABOUT US
        </h1>
      </div>
      <div className='py-20 bg-[#f0e9e0]  '>
        <h1 className={`${playfair.className} text-center text-2xl font-bold text-[#c26e00]`}>KANYA STUDIO, a celebration of timeless grace. </h1>
          <p className={`${playfair.className} text-center text-xl text-[#c26e00]`}>At KANYA STUDIO, we believe in preserving emotions through art capturing every glance,<br />
          every smile, and every story that defines the beauty of your most cherished moments.</p>
      </div>
      <div className='relative'>
        <h1 className={`${playfair.className} absolute top-10 md:top-40 inset-0 text-center text-5xl text-[#4d4d4d]`} >FROM <br /> <span className='italic text-6xl font-bold'>Whispers of Romance</span> <br /> MAGIC TO <br /> RAW HUMAN DRAMA</h1>
        <img src="/photo/WeddingImage/About.jpg" alt="about"  className=' object-cover'/>
      </div>

      <Footer />
    </div>
  )
}

export default page