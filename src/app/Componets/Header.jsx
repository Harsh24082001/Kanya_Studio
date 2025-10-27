"use client"
import React, { useState } from 'react'
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // adjust as needed
  style: ['normal', 'italic'], // if you need italic
})

import { Playfair_Display } from 'next/font/google'


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-transparent text-gray-700 ">
            <div className="flex justify-between items-center px-6 py-4">
                {/* Left side - Logo */}
                <img src="/logo.png" alt="Logo" className="w-32 sm:w-40 object-contain md:hidden"/>

                {/* Menu button (only mobile) */}
                <button className="md:hidden text-3xl " onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex justify-center md:w-full items-center gap-10 text-base font-bold">
                    <a href="/photography"><li className={`${playfair.className} hover:text-[#e9c08b] cursor-pointer transition`}>PHOTOGRAPHY</li></a>
                    <a href="/videography"><li className={`${playfair.className} hover:text-[#e9c08b] cursor-pointer transition`}>FILMS</li></a>
                    <a href="/"><img src="/logo.png" alt="Logo" className="w-32 sm:w-80 object-contain"/></a>
                    <a href="/contact-us"><li className={`${playfair.className} hover:text-[#e9c08b] cursor-pointer transition`}>CONTACT US</li></a>
                    <a href="/about-us"><li className={`${playfair.className} hover:text-[#e9c08b] cursor-pointer transition`}>ABOUT</li></a>
                </ul>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <ul className="flex flex-col items-center bg-white text-gray-700 py-4 space-y-4 md:hidden shadow-md">
                    <a href="/photography"><li className="hover:text-black cursor-pointer transition">Photography</li></a>
                     <a href="/videography"><li className="hover:text-black cursor-pointer transition">Films</li></a>
                    <a href="/contact-us"><li className="hover:text-black cursor-pointer transition">Contact Us</li></a>
                    <a href="/about-us"><li className="hover:text-black cursor-pointer transition">About</li></a>
                </ul>
            )}
        </nav>
    );
}

export default Header