"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // adjust as needed
  style: ['normal', 'italic'], // if you need italic
})

export default function Slider() {
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
    <div className="py-10 md:py-20  mx-2">
      {/* Section Heading */}
      <h2 className={`${playfair.className} text-center text-xl sm:text-2xl md:text-5xl  text-[#8B5E3C] mb-10 leading-relaxed`}>
        THE STORYTELLERS
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination,Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        speed={800} 
        breakpoints={{
          480: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 5 },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="max-w-full mx-auto px-4 sm:px-8"
      >
        {images.map(({ src, alt }, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden ">
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all scroll-smooth duration-500 ease-in-out"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
