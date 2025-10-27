"use client"

import React, { useState } from 'react'
const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'], // adjust as needed
    style: ['normal', 'italic'], // if you need italic
})

import { Playfair_Display } from 'next/font/google'

const Contact_Form = () => {
    const options = ['Photography', 'Films', 'Both Photography and Films']
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guestCount: "",
    eventDetails: "",
    location: "",
    eventDate: "",
    services: [],
  });

  const handleChange =((e) =>{
    const {name, value} = e.target;
    setFormData({...formData ,[name]:value})
  });

  const handleCheckbox =(e)=>{
    const {value , checked} =e.target;
    
  }

    return (
        <div className="flex justify-center md:px-2 lg:px-8 py-10">
            <div className="bg-white rounded-3xl w-full max-w-5xl md:max-w-4xl text-black shadow-lg">
                <form className="py-10 px-5 md:px-10 md:py-15 font-serif  sm:text-md">
                    {/* Name */}
                    <label className="block mb-1">Name <span className="text-xs font-light text-gray-600">(required)</span></label>
                    <input type="text" name="CustomerName" id="name" required
                        className="border border-gray-400 w-full h-12 bg-gray-100  px-3 mb-5 focus:outline-none focus:ring-2 focus:ring-black" />

                    {/* Email */}
                    <label className="block mb-1">Email <span className="text-xs font-light text-gray-600">(required)</span></label>
                    <input type="email" name="CustomerEmail" id="email" required
                        className="border border-gray-400 w-full h-12 bg-gray-100  px-3 mb-5 focus:outline-none focus:ring-2 focus:ring-black" />

                    {/* Phone */}
                    <label className="block mb-1">Phone <span className="text-xs font-light text-gray-600">(required)</span></label>
                    <input type="tel" name="CustomerPhone" id="phone" required
                        className="border border-gray-400 w-full h-12 bg-gray-100  px-3 mb-5 focus:outline-none focus:ring-2 focus:ring-black" />

                    {/* Guest Count */}
                    <label className="block mb-1">Estimated Guest Count{" "}<span className="text-xs font-light text-gray-600">(required)</span></label>
                    <input type="text" name="GuestCount" id="guestCount" required
                        className="border border-gray-400 w-full h-12 bg-gray-100  px-3 mb-5 focus:outline-none focus:ring-2 focus:ring-black" />

                    {/* Event Details */}
                    <label className="block mb-1">Tell us more about your wedding - event flow, venues.{" "} <span className="text-xs font-light text-gray-600">(required)</span></label>
                    <textarea name="EventDetails" id="eventDetails" required
                        className="border border-gray-400 w-full bg-gray-100 h-15 px-3 py-2 mb-5 focus:outline-none focus:ring-2 focus:ring-black"></textarea>

                    {/* Location */}
                    <label className="block mb-1">Location of the wedding{" "}<span className="text-xs font-light text-gray-600">(required)</span></label>
                    <input type="text" name="Location" id="location" required
                        className="border border-gray-400 w-full h-12 bg-gray-100 px-3 mb-5 focus:outline-none focus:ring-2 focus:ring-black" />

                    {/* Event Dates */}
                    <label className="block text-md mb-1">Event Dates{" "}<span className="text-xs font-light text-gray-600">(required)</span></label>
                    <input type="date" name="EventDates" id="dates" required
                        className="border border-gray-400 w-full h-12 bg-gray-100 px-3 mb-5 focus:outline-none focus:ring-2 focus:ring-black" />

                    {/* Services */}
                    <p className="font-medium py-2">What services are you looking for?</p>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-2 mb-6">
                        {options.map((option, index) => (
                            <label key={index} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="options"
                                    value={option}
                                    className="accent-[#000000] w-4 h-4"
                                    required
                                />
                               <span className="text-sm">{option}</span>
                            </label>
                        ))}
                    </div>

                    {/* Submit */}
                    <button type="submit"className="w-full sm:w-auto bg-[#af6300] text-white px-6 py-3 rounded-md text-sm  hover:bg-[#8e5100] transition duration-200">
                        Submit
                    </button>
                </form>
            </div>
        </div>

    )
}

export default Contact_Form