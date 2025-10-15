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
        <div className='bg-[#f0e9e0] max-w-full'>
            <div className="absolute  w-full ">
                <Header />
            </div>
            <img src="front.png" alt="HomeImage" className='w-full h-238 object-cover ' />
            <div >
                <div className='bg-[#f0e9e0] max-w-full h-250 '>
                    <h1 className={`${playfair.className} absolute max-w-full text-6xl pt-60 ml-120 text-black/90`} >TIMELESS WEDDING STORIES  <br />
                        <span className={`${playfair.className} text-3xl italic`}> with </span>HEART, EMOTION CINEMATIC  </h1>
                    <div className='flex justify-between'>
                        <img src="photo/image.png" alt="image1" className='w-100 object-cover h-120 mt-92 ml-60' />
                        <p className={`${playfair.className} text-md text-black text-justify relative m-4 mt-100`}>
                            Considered to be the epitome of Modern Photography and Filmmaking,
                            Kanya Studios is dedicated to transforming wedding moments into timeless
                            memories. With a passion for storytelling through both photography and videography,
                            we focus on the emotions, the details, and the fleeting moments that make every wedding unique.
                            <br />
                            <br />
                            Our team works closely with couples to craft cinematic experiences that reflect their love story.
                            Every frame we capture is designed to be cherished forever, creating visuals that resonate across generations.</p>
                        <img src="photo/image2.png" alt="image1" className='bottom-50 w-90 object-cover h-140 mt-40 mr-62 ' />
                    </div>
                    <img src="photo/brandlogo.png" alt="image1" className='relative object-cover ml-180 bottom-25' />
                </div>
            </div>
            <div className='mb-20 max-w-full' >
                <Photo />
            </div>
            <div>
                <Video />
            </div>
            <div className='relative w-full'>
                <img src="/photo/WeddingImage/Kanya Studios Main.png" alt="main" className='object-cover max-w-full h-full opacity-90' />
                <img src="/photo/WeddingImage/icon.png" alt="flyicon" className='absolute bottom-120 w-50 ml-45' />
                <p className='absolute top-80 text-md text-white w-200 justify ml-50'>
                    Fly Production House represents our premier photography service,
                    led by Divesh Paswan, the visionary founder of Fly Production.
                    Our mission is to craft timeless images that capture the true essence of your special day.
                    With a refined, unobtrusive style and a focus on bright, airy visuals,
                    we create photographs that transport you back to those precious moments for years to come.
                    This exclusive package is reserved for a select few weddings,
                    reflecting the care and dedication we pour into every frame.
                    Due to its distinctiveness,Fly Production House deserves its own dedicated website an
                    experience as exceptional as the memories we capture. <br />click the link button </p>
                <button className={`${playfair.className} bg-[#a0884d] absolute bottom-50 ml-50 p-5 text-sm rounded-md flex items-center justify-center text-white`}>
                <a href='https://flyproductionhouse.com/'>Fly Production House</a></button>
            </div>
            <Footer/>
        </div>
    )
}

export default FrontPage