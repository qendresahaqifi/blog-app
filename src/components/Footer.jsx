import React from 'react'
import { FaFacebook, FaDribbble } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-gray-700 text-white'>
        <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
            <div className='grid mb-5 lg:grid-cols-6'>
                <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>

                    {/* ------ category 1 ------ */}
                    <div>
                        <p className='font-medium tracking-wide '>Category</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-400 transition-colors duration-300 hover:text-yellow-400'>News</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-400 transition-colors duration-300 hover:text-yellow-400'>World</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-400 transition-colors duration-300 hover:text-yellow-400'>Games</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-400 transition-colors duration-300 hover:text-yellow-400'>References</a>
                            </li>
                        </ul>
                    </div>

                    {/* ------ category 2 ------ */}
                    <div>
                        <p className='font-medium tracking-wide '>Links</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-400 transition-colors duration-300 hover:text-yellow-400'>Media</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-400 transition-colors duration-300 hover:text-yellow-400'>Brochure</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-400 transition-colors duration-300 hover:text-yellow-400'>Nonprofit</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-400 transition-colors duration-300 hover:text-yellow-400'>Education</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-400 transition-colors duration-300 hover:text-yellow-400'>Projects</a>
                            </li>
                        </ul>
                    </div>

                    {/* ------ category 3 ------ */}
                    <div>
                        <p className='font-medium tracking-wide '>Learn more</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-400 transition-colors duration-300 hover:text-yellow-400'>Pricing</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-400 transition-colors duration-300 hover:text-yellow-400'>Mac App</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-400 transition-colors duration-300 hover:text-yellow-400'>Teams</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-400 transition-colors duration-300 hover:text-yellow-400'>Creators</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-400 transition-colors duration-300 hover:text-yellow-400'>API</a>
                            </li>
                        </ul>
                    </div>

                    {/* ------ category 4 ------ */}
                    <div>
                        <p className='font-medium tracking-wide '>Support</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-400 transition-colors duration-300 hover:text-yellow-400'>Contact</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-400 transition-colors duration-300 hover:text-yellow-400'>FAQ</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-400 transition-colors duration-300 hover:text-yellow-400'>Creators Handbook</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-400 transition-colors duration-300 hover:text-yellow-400'>Terms & conditions</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-400 transition-colors duration-300 hover:text-yellow-400'>Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-400 transition-colors duration-300 hover:text-yellow-400'>Creators Terms</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ------ subscription ------ */}
                <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                    <p className='font-medium tracking-wide'>Subscribe for updates</p>
                    <form className='mt-4 flex flex-col md:flex-row'>
                        <input type="email" name="email" id="email" placeholder="Enter your email address" className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white  rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus-within:outline-gray-500 text-gray-700 placeholder:text-gray-500" />

                        <button type="submit" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md hover:bg-yellow-400 focus:outline-none cursor-pointer border" >Subscribe</button>
                    </form>
                </div>
            </div>

            <div className='flex flex-col justify-between pt-5 pb-5 border-t border-gray-600 sm:flex-row text-gray-400'>
                <p className='text-sm'>© Copyright 2025 | All rights reserved.</p>
                <div className='flex items-center mt-4 space-x-4 sm:mt-0'> 
                    <a href="/" className='transition-all duration-300 hover:text-yellow-400'><FaFacebook className='h-6 w-6' /></a>
                    <a href="/" className='transition-all duration-300 hover:text-yellow-400'><FaDribbble className='h-6 w-6' /></a>
                    <a href="/" className='transition-all duration-300 hover:text-yellow-400'><FaXTwitter className='h-6 w-6' /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer