import React from 'react'
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaHome, FaPhone, FaPhoneAlt } from 'react-icons/fa';
import { MdMailOutline, MdPhoneAndroid } from 'react-icons/md';

const Footer = () => {
    return (
      
    <footer className="bg-white text-gray-800 ">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-10">

        {/* Logo + Social Icons */}
        <div className="flex flex-col items-center sm:items-start">
          <a href="/">
            <img src="/logo.png" alt="logo" className="w-36 sm:w-48 mb-4" />
          </a>

          <div className="flex gap-5 text-xl md:text-2xl">
            <a href="https://www.instagram.com/kanyastudious/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="hover:text-pink-600 transition" />
            </a>
            <a href="https://www.facebook.com/kanyastudious" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="hover:text-blue-600 transition" />
            </a>
            <a href="https://twitter.com/kanyastudious" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="hover:text-sky-500 transition" />
            </a>
            <a href="https://www.youtube.com/@flyproductionhouse" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="hover:text-red-600 transition" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center sm:items-start md:text-md md:mt-5">
          <ul className="text-center sm:text-left space-y-3 ">
            <a href="/photography"><li className="hover:text-[#a0884d] transition cursor-pointer m-1">Photography</li></a>
            <a href="/videography"><li className="hover:text-[#a0884d] transition cursor-pointer m-1">Films</li></a>
            <a href="/contact-us"><li className="hover:text-[#a0884d] transition cursor-pointer m-1">Contact Us</li></a>
            <a href="/about-us"><li className="hover:text-[#a0884d] transition cursor-pointer m-1">About</li></a>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center text-sm md:text-md sm:items-start space-y-3 text-center sm:text-left ">
          <a href="https://maps.app.goo.gl/sCzCfUPnudShYhVB7" className="flex items-start justify-center sm:justify-start gap-2 hover:text-[#a0884d] transition">
            <FaHome className="md:size-5 " />
            <p className='md:'>Rustomjee Ease Zone Mall, Malad West,<br />Mumbai, Maharashtra 400104.</p>
          </a>

          <a href="mailto:flyproductionhouse.info@gmail.com" className="flex items-center justify-center sm:justify-start gap-2 hover:text-[#a0884d] transition">
            <MdMailOutline  className="md:size-5" /> flyproductionhouse.info@gmail.com
          </a>

          <a href="tel:+02245038072" className="flex items-center justify-center sm:justify-start gap-2 hover:text-[#a0884d] transition">
            <MdPhoneAndroid  className="md:size-5"/> 02245038072
          </a>

          <a href="tel:+919987306758" className="flex items-center justify-center sm:justify-start gap-2 hover:text-[#a0884d] transition">
            <FaPhone  className="md:size-5"/> +91 99873 06758
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6">
        <div className='border border-gray-400 h-0.2'></div>
        <p className="text-center text-sm py-4 md:text-md">Kanya Studio © 2024. By <a href="https://harshvishwa.vercel.app/">Harsh Vishwakarma</a>.</p>
      </div>
    </footer>
    )
}

export default Footer