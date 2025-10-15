import React from 'react'


const Header = () => {
    return (
        <div>
            <div className="flex ">
                <ul className="w-full p-2 gap-10 flex items-center text-center text-md justify-center text-gray-800">
                    <li>Photography</li>
                    <li>Films</li>
                    <li className=" "><img src="logo.png" alt="Logo" width={300} /></li>
                    <li>Contact us</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    )
}

export default Header