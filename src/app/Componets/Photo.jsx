import React from 'react'
import Image from "next/image";
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'], // adjust as needed
    style: ['normal', 'italic'], // if you need italic
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
    { src: "/photo/WeddingImage/img15.jpg", alt: "img8" },
    { src: "/photo/WeddingImage/img11.jpg", alt: "img11" },
    { src: "/photo/WeddingImage/img6.jpg", alt: "img6" },
    { src: "/photo/WeddingImage/img12.jpg", alt: "img12" },
    { src: "/photo/WeddingImage/img13.jpg", alt: "img13" },
    { src: "/photo/WeddingImage/img5.jpg", alt: "img5" },
    { src: "/photo/WeddingImage/img14.png", alt: "img14" },
    { src: "/photo/WeddingImage/img8.jpg", alt: "img15" },
  ];

  return (
    <div>
      <div className='max-w-full text-center py-20'>
        <h1 className={`${playfair.className} text-3xl italic font-extralight`}>“SOME OF THE MOST 
          <span className='italic font-semibold text-4xl'>CAPTIVATING</span> WEDDING IMAGES”</h1>
      </div>
      <div className="grid grid-cols-5 gap-0.5 justify-center ">
      {images.map((img, index) => (
        <div key={index} className="relative w-94 h-95 ">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div >
    <button className={`${playfair.className} relative top-25 ml-220 bg-[#a0884d] p-3 text-xs rounded-md flex items-center justify-center text-white`}>Photography more</button>
    </div>
  );
};

export default Photo;
