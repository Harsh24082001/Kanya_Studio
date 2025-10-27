import React from 'react'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'
import { Playfair_Display } from 'next/font/google'
import { FaFacebook, FaFacebookF, FaInstagram, FaInstagramSquare, FaTwitter, FaYoutube } from 'react-icons/fa'
import Contact_Form from '../Componets/Contact_Form'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // adjust as needed
  style: ['normal', 'italic'], // if you need italic
})

const page = () => {
  return (
    <div className='bg-[#f0e9e0]'>

      <div className="absolute top-0 left-0 w-full z-10 ">
        <Header />
      </div>

      <div className="relative w-full h-[60vh] md:h-[100vh]">
        <video src="/photo/WeddingVideo/Contactus.mp4" autoPlay loop muted className="w-full h-full object-cover"></video>
      </div>

      <div className='max-w-full px-5 py-5 md:py-40 '>
        <h1 className={`${playfair.className} text-xl sm:text-md md:text-4xl text-[#c26e00] white-space:pre-wrap text-center font-bold`}>CURATING...</h1>
        <h1 className={`${playfair.className} text-2xl sm:text-md md:text-6xl text-[#c26e00] white-space:pre-wrap text-center italic`}>Timeless Memoriess</h1><br /><br />
        <p className={`${playfair.className} text-sm sm:text-sm md:text-md text-[#c26e00] white-space:pre-wrap text-center`}>
          Please fill in the form below and provide as much details as possible to help us create an accurate quote. <br /><br />
          We will try to get back within 48hrs , give us a call on the number below if you don’t hear from us or if its a last minute enquiry.<br /> <br />
          Please go through our FAQ section to find answers to some common questions.<br /> <br />
        </p>
        <p className={`${playfair.className} text-sm sm:text-sm md:text-md text-[#c26e00] text-center `}> flyproductionhouse.info@gmail.com<br /> +91 99873 06758</p>
        <br /><br />
        <div className="flex gap-5 text-xl md:text-2xl justify-center mb-10 ">
          <a href="https://www.instagram.com/kanyastudious/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="hover:text-pink-700 transition" />
          </a>
          <a href="https://facebook.com/kanyastudious" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaFacebookF className="hover:text-blue-800 transition" />
          </a>
          <a href="https://www.Twitter.com/flyproductionhouse" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaTwitter className="hover:text-sky-600 transition rounded" />
          </a>
        </div>
        <Contact_Form/>
      </div>

      


      <Footer />
    </div>
  )
}

export default page