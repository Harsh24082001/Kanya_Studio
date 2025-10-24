import React from 'react'
import Header from './Header'
import { Playfair_Display } from 'next/font/google'
import Photo from './Photo'
import Video from './Video'
import Footer from './Footer'

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'], // adjust as needed
    style: ['normal', 'italic'], // if you need italic
})

const FrontPage = () => {
    return (
        <div className='bg-[#f0e9e0] max-w-full md:w-full'>
            <div className="relative w-full">
                {/* Header - stays on top of the image */}
                <div className="absolute top-0 left-0 w-full z-20">
                    <Header />
                </div>

                {/* Background Image */}
                <img src="/front.png" alt="Home Image" className="w-full h-[60vh] sm:h-[70vh] md:h-[100vh] object-cover" />
            </div>

            <div className="bg-[#f0e9e0] w-full py-0 relative overflow-hidden mb-20">
                {/* Heading Section */}
                <h1 className={`${playfair.className} text-center mt-10  md:mt-30 text-black/90 text-2xl sm:text-3xl  md:text-6xl md:relative font-medium leading-tight px-4`}>
                    TIMELESS WEDDING STORIES <br />
                    <span className={`${playfair.className} text-2xl sm:text-3xl italic font-normal`}>with</span>{" "}
                    HEART, EMOTION, CINEMATIC </h1>

                {/* Content Section */}
                <div className="flex flex-col mt-5 md:flex-row justify-between items-center gap-8 px-6 md:px-45">
                    {/* Left Image */}
                    <img
                        src="/photo/image.png"
                        alt="Wedding 1"
                        className="w-full md:w-100 h-64 md:h-140 object-cover shadow-md "
                    />

                    {/* Text Section */}
                    <p
                        className={`${playfair.className} text-black text-sm md:text-lg md:-mt-30 text-justify leading-relaxed md:w-1/2`}
                    >
                        Considered to be the epitome of Modern Photography and Filmmaking, Kanya
                        Studios is dedicated to transforming wedding moments into timeless
                        memories. With a passion for storytelling through both photography and
                        videography, we focus on the emotions, the details, and the fleeting
                        moments that make every wedding unique.
                        <br />
                        <br />
                        Our team works closely with couples to craft cinematic experiences that
                        reflect their love story. Every frame we capture is designed to be
                        cherished forever, creating visuals that resonate across generations.
                    </p>

                    {/* Right Image */}
                    <img
                        src="/photo/image2.png"
                        alt="Wedding 2"
                        className="w-full md:w-100 h-64 md:h-140 md:-mt-75 object-cover  shadow-md"
                    />
                </div>

            </div>

            <div className='mb-20 max-w-full' >
                <Photo />
            </div>
            <div>
                <Video />
            </div>
            <div className="relative w-full">
                {/* Background Image */}
                <img
                    src="/photo/WeddingImage/Kanya Studios Main.png"
                    alt="Main Background"
                    className="w-full h-[70vh]  sm:h-[80vh] md:h-[90vh] object-cover opacity-90"
                />

                {/* Floating Icon */}
                <img
                    src="/photo/WeddingImage/icon.png"
                    alt="Fly Icon"
                    className="absolute top-5 sm:top-10 left-1/2 transform -translate-x-1/2 w-16 md:top-40 sm:w-24 md:w-42 mb-10"
                />

                {/* Text Section */}
                <div className="absolute inset-0 flex flex-col justify-center items-center px-6 sm:px-12 text-center text-white">
                    <p className={`${playfair.className} max-w-8xl  text-xs sm:text-base md:text-lg leading-relaxed`}                    >
                        Fly Production House represents our premier photography service, led by
                        <span className="font-semibold"> Divesh Paswan</span>, the visionary founder of
                        Fly Production. Our mission is to craft timeless images that capture the true
                        essence of your special day. With a refined, unobtrusive style and a focus on
                        bright, airy visuals, we create photographs that transport you back to those
                        precious moments for years to come. This exclusive package is reserved for a
                        select few weddings, reflecting the care and dedication we pour into every
                        frame. Due to its distinctiveness, Fly Production House deserves its own
                        dedicated website — an experience as exceptional as the memories we capture.
                        <br />
                        <br />
                        Click the link below to explore more.
                    </p>

                    {/* Button */}
                    <a href="https://flyproductionhouse.com/" target="_blank" 
                        className={`${playfair.className} bg-[#a0884d] mt-8 px-6 py-2 text-xs sm:text-base rounded-md text-white hover:bg-[#8c7643] transition`}
                    >
                        Fly Production House
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default FrontPage