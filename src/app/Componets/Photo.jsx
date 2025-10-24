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
    <div className="w-full text-center py-16">
  {/* Heading */}
  <h1
    className={`${playfair.className} text-2xl sm:text-3xl md:text-4xl italic font-extralight px-4`}
  >
    “SOME OF THE MOST{" "}
    <span className="italic font-semibold text-3xl sm:text-4xl md:text-5xl">
      CAPTIVATING
    </span>{" "}
    WEDDING IMAGES”
  </h1>

  {/* Image Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 mt-10 ">
    {images.map((img, index) => (
      <div
        key={index}
        className="relative w-full aspect-[5/5] overflow-hidden"
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

  {/* Button */}
  <div className="flex justify-center mt-10">
    <button
      className={`${playfair.className} bg-[#a0884d] p-3 text-xs sm:text-base rounded-md text-white md:font-medium hover:bg-[#8c7643] transition`}   >
      Photography More
    </button>
  </div>
</div>

  );
};

export default Photo;
