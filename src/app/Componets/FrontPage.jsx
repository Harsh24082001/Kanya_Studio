import React from "react";
import Header from "./Header";
import { Playfair_Display } from "next/font/google";
import Photo from "./Photo";
import Video from "./Video";
import Footer from "./Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const FrontPage = () => {
  return (
    <div className="bg-[#f0e9e0] w-full overflow-hidden">
      {/* HEADER */}
      <div className="absolute top-0 w-full z-10">
        <Header />
      </div>

      {/* HERO IMAGE */}
      <img
        src="/front.png"
        alt="Home Image"
        className="w-full h-[500px] md:h-[700px] object-cover"
      />

      {/* MAIN SECTION */}
      <section className="bg-[#f0e9e0] w-full py-16 px-6 md:px-16 relative">
        <h1
          className={`${playfair.className} text-3xl sm:text-4xl md:text-6xl font-semibold text-center text-black/90 mb-10`}
        >
          TIMELESS WEDDING STORIES
          <br />
          <span className="text-2xl md:text-3xl italic">with</span> HEART,
          EMOTION, CINEMATIC
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Left Image */}
          <img
            src="/photo/image.png"
            alt="wedding1"
            className="w-full lg:w-[380px] h-[300px] md:h-[350px] object-cover rounded-lg shadow-md"
          />

          {/* Center Text */}
          <p
            className={`${playfair.className} text-sm sm:text-base text-black text-justify leading-relaxed`}
          >
            Considered to be the epitome of Modern Photography and Filmmaking,
            Kanya Studios is dedicated to transforming wedding moments into
            timeless memories. With a passion for storytelling through both
            photography and videography, we focus on the emotions, the details,
            and the fleeting moments that make every wedding unique.
            <br />
            <br />
            Our team works closely with couples to craft cinematic experiences
            that reflect their love story. Every frame we capture is designed to
            be cherished forever, creating visuals that resonate across
            generations.
          </p>

          {/* Right Image */}
          <img
            src="/photo/image2.png"
            alt="wedding2"
            className="w-full lg:w-[350px] h-[300px] md:h-[350px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Brand Logo */}
        <div className="flex justify-center mt-12">
          <img
            src="/photo/brandlogo.png"
            alt="brand logo"
            className="w-[160px] md:w-[200px] object-contain"
          />
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <div className="mb-20 w-full">
        <Photo />
      </div>

      {/* VIDEO SECTION */}
      <div>
        <Video />
      </div>

      {/* FLY PRODUCTION SECTION */}
      <section className="relative w-full mt-20">
        <img
          src="/photo/WeddingImage/Kanya Studios Main.png"
          alt="main"
          className="object-cover w-full h-[500px] md:h-[700px] opacity-90"
        />

        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-20 space-y-4 bg-black/40 md:bg-transparent">
          <img
            src="/photo/WeddingImage/icon.png"
            alt="fly icon"
            className="w-[80px] md:w-[120px] mb-2"
          />

          <p
            className={`${playfair.className} text-white text-sm sm:text-base md:text-lg max-w-[700px] leading-relaxed`}
          >
            Fly Production House represents our premier photography service,
            led by Divesh Paswan, the visionary founder of Fly Production. Our
            mission is to craft timeless images that capture the true essence of
            your special day. With a refined, unobtrusive style and a focus on
            bright, airy visuals, we create photographs that transport you back
            to those precious moments for years to come.
            <br />
            <br />
            This exclusive package is reserved for a select few weddings,
            reflecting the care and dedication we pour into every frame. Due to
            its distinctiveness, Fly Production House deserves its own dedicated
            website — an experience as exceptional as the memories we capture.
          </p>

          <a
            href="https://flyproductionhouse.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${playfair.className} bg-[#a0884d] mt-4 px-6 py-3 text-sm md:text-base rounded-md text-white hover:bg-[#8b763d] transition-all duration-300`}
          >
            Visit Fly Production House
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default FrontPage;
