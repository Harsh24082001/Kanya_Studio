import React from 'react'
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaHome, FaPhone, FaPhoneAlt } from 'react-icons/fa';
import { MdMailOutline, MdPhoneAndroid } from 'react-icons/md';

const Footer = () => {
    return (
        <div>
            <div className='p-12 flex'>
                <div>
                    <a href="/"><img src="/logo.png" alt="logo" className='w-75 ml-40 ' /></a>
                    <div className='ml-55' style={{ display: 'flex', gap: '20px', fontSize: '24px' }}>
                        <a href="https://www.instagram.com/kanyastudious/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram color="black" />
                        </a>
                        <a href="https://www.facebook.com/kanyastudious" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebookF color="black" />
                        </a>
                        <a href="https://twitter.com/kanyastudious" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter color="black" />
                        </a>
                        <a href="https://www.youtube.com/@flyproductionhouse" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <FaYoutube color="black" />
                        </a>
                    </div>
                </div>
                <div className='ml-80 pt-5'>
                    <ul className="text-md justify-center text-gray-700 ">
                        <li className='m-3'>Photography</li>
                        <li className='m-3'>Films</li>
                        <li className='m-3'>Contact us</li>
                        <li className='m-3'>About</li>
                    </ul>
                </div>
                <div className='ml-80 gap-5 '>
                     <a href="https://maps.app.goo.gl/sCzCfUPnudShYhVB7" className='flex m-2'><p className='flex items-center '><FaHome className='w-10'/> Vasari Hill Rd, Rustomjee Ease Zone Mall Malad West, 
                     <br />Mumbai, Maharashtra 400104. 1st Floor Office no - 3068</p></a>
                     <a href="mailto:flyproductionhouse.info@gmail.com" className='flex items-center m-2'><MdMailOutline className='w-10'/>flyproductionhouse.info@gmail.com</a>
                     <a href="tel:+02245038072" className='flex items-center m-2'><MdPhoneAndroid className='w-10'/> 02245038072</a>
                     <a href="tel:+91 99873 06758" className='flex items-center m-2'><FaPhone className='w-10'/> +91 99873 06758</a>
                </div>
            </div>
            <div> 
                <p className='text-center p-2'>© 2024 Kanya Studio. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer