import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; 

const Banner = ({title, subtitle}) => {

  return (
    <div className='px-4 py-32 bg-gray-700 text-white dark:text-gray-300 mx-auto mb-8 shadow shadow-gray-900'>
        <div className='text-center'>
            <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>{title}</h1>
            <p className='text-gray-100 dark:text-gray-300 lg:w-3/5 mx-auto mb-5'>{subtitle}</p>
            <div>
                <Link to='/' className='font-medium hover:text-yellow-400 inline-flex items-center transition-all duration-200 ease-in'>Learn more <FaArrowRight className='mt-1 ml-2' /> </Link>
            </div>
        </div>
        

    </div>
  )
}

export default Banner