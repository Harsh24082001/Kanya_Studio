import React from 'react'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'
import { Playfair_Display } from 'next/font/google'
import Image from 'next/image'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // adjust as needed
  style: ['normal', 'italic'], // if you need italic
})

const page = () => {
  const images = [
    { src: "/photo/WeddingImage/img1.jpg", alt: "Wedding Image 1" },
    { src: "/photo/WeddingImage/img19 (5).jpg", alt: "Wedding Image 19-5" },
    { src: "/photo/WeddingImage/img3.jpg", alt: "Wedding Image 3" },
    { src: "/photo/WeddingImage/img19 (8).jpg", alt: "Wedding Image 19-8" },
    { src: "/photo/WeddingImage/img6.jpg", alt: "Wedding Image 6" },
    { src: "/photo/WeddingImage/img19 (2).jpg", alt: "Wedding Image 19-2" },
    { src: "/photo/WeddingImage/img9.jpg", alt: "Wedding Image 9" },
    { src: "/photo/WeddingImage/img19 (19).jpg", alt: "Wedding Image 19-19" },
    { src: "/photo/WeddingImage/img13.jpg", alt: "Wedding Image 13" },
    { src: "/photo/WeddingImage/img19 (17).jpg", alt: "Wedding Image 19-17" },
    { src: "/photo/WeddingImage/img14.png", alt: "Wedding Image 14" },
    { src: "/photo/WeddingImage/img19 (10).jpg", alt: "Wedding Image 19-10" },
    { src: "/photo/WeddingImage/img17.jpg", alt: "Wedding Image 17" },
    { src: "/photo/WeddingImage/img19 (15).jpg", alt: "Wedding Image 19-15" },
    { src: "/photo/WeddingImage/img19 (1).jpg", alt: "Wedding Image 19-1" },
    { src: "/photo/WeddingImage/img19 (13).jpg", alt: "Wedding Image 19-13" },
    { src: "/photo/WeddingImage/img19 (21).jpg", alt: "Wedding Image 19-21" },
    { src: "/photo/WeddingImage/img19 (16).jpg", alt: "Wedding Image 19-16" },
    { src: "/photo/WeddingImage/img19 (3).jpg", alt: "Wedding Image 19-3" },
    { src: "/photo/WeddingImage/img19 (4).jpg", alt: "Wedding Image 19-4" },
    { src: "/photo/WeddingImage/img4.jpg", alt: "Wedding Image 4" },
    { src: "/photo/WeddingImage/img19 (6).jpg", alt: "Wedding Image 19-6" },
    { src: "/photo/WeddingImage/img19 (7).jpg", alt: "Wedding Image 19-7" },
    { src: "/photo/WeddingImage/img19 (9).jpg", alt: "Wedding Image 19-9" },
    { src: "/photo/WeddingImage/img12.jpg", alt: "Wedding Image 12" },
    { src: "/photo/WeddingImage/img5.jpg", alt: "Wedding Image 5" },
    { src: "/photo/WeddingImage/img19 (11).jpg", alt: "Wedding Image 19-11" },
    { src: "/photo/WeddingImage/img2.jpg", alt: "Wedding Image 2" },
    { src: "/photo/WeddingImage/img19 (12).jpg", alt: "Wedding Image 19-12" },
    { src: "/photo/WeddingImage/img8.jpg", alt: "Wedding Image 8" },
    { src: "/photo/WeddingImage/img19 (14).jpg", alt: "Wedding Image 19-14" },
    { src: "/photo/WeddingImage/img15.jpg", alt: "Wedding Image 15" },
    { src: "/photo/WeddingImage/img10.jpg", alt: "Wedding Image 10" },
    { src: "/photo/WeddingImage/img19 (18).jpg", alt: "Wedding Image 19-18" },
    { src: "/photo/WeddingImage/img11.jpg", alt: "Wedding Image 11" },
    { src: "/photo/WeddingImage/img19 (20).jpg", alt: "Wedding Image 19-20" },
    { src: "/photo/WeddingImage/img7.jpg", alt: "Wedding Image 7" },
    { src: "/photo/WeddingImage/img18.jpg", alt: "Wedding Image 18" },
    { src: "/photo/WeddingImage/Haldi.png", alt: "Haldi Ceremony" },
  ];

  
  return (
    <div>
      <div className="absolute top-0 left-0 w-full z-10">
        <Header />
      </div>
      <div className="relative w-full h-[60vh] md:h-[100vh] mb-10">
        <img src="/photo/WeddingImage/Photo.jpg"  className="w-full h-full object-cover"></img>
        <h1 className={`${playfair.className} absolute inset-0 flex items-center justify-center top-100 md:top-200 text-3xl md:text-6xl align-bottom text-white font-bold md:font-normal`}>
          RARE MOMENTS PHOTOS
        </h1>
      </div>
         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  mt-10 ">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative w-full h-120 overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
      <Footer />
    </div>
  )
}

export default page