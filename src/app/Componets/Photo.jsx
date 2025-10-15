import React from 'react'
import Image from "next/image"
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})

const Photo = () => {
  const images = [
    { src: "/photo/WeddingImage/img1.jpg", alt: "img1" },
    { src: "/photo/WeddingImage/img2.jpg", alt: "img2" },
    { src: "/photo/WeddingImage/img7.jpg", alt: "img7" },
    { src: "/photo/WeddingImage/img3.jpg", alt: "img3" },
    { src: "/photo/WeddingImage/img9.jpg", alt: "img9" },
    { src: "/photo/WeddingImage/img4.jpg", alt: "img4" },
    { src: "/photo/WeddingImage/img10.jpg", alt: "img10" },
    { src: "/photo/WeddingImage/img15.jpg", alt: "img15" },
    { src: "/photo/WeddingImage/img11.jpg", alt: "img11" },
    { src: "/photo/WeddingImage/img6.jpg", alt: "img6" },
    { src: "/photo/WeddingImage/img12.jpg", alt: "img12" },
    { src: "/photo/WeddingImage/img13.jpg", alt: "img13" },
    { src: "/photo/WeddingImage/img5.jpg", alt: "img5" },
    { src: "/photo/WeddingImage/img14.png", alt: "img14" },
    { src: "/photo/WeddingImage/img8.jpg", alt: "img8" },
  ]

  return (
    <div className='w-full px-4 sm:px-6 md:px-12'>
      {/* Heading */}
      <div className='text-center py-10 sm:py-16'>
        <h1 className={`${playfair.className} text-2xl sm:text-3xl md:text-4xl italic font-light`}>
          “SOME OF THE MOST
          <span className='italic font-semibold text-3xl sm:text-4xl ml-2'>CAPTIVATING</span> WEDDING IMAGES”
        </h1>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1">
        {images.map((img, index) => (
          <div key={index} className="relative aspect-square max-w-full">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover"
              priority={index < 5}
            />
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button className={`${playfair.className} bg-[#a0884d] px-6 py-3 text-sm rounded-md text-white`}>
          Photography more
        </button>
      </div>
    </div>
  )
}

export default Photo
