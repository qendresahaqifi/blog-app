import { useState, useEffect } from 'react';
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";

export default function AppTheme() {

    const savedDarkMode = localStorage.getItem('darkmode') === 'true';

    const [isDarkMode, setIsDarkMode] = useState(savedDarkMode);

    useEffect(() => {
      const body = document.body;
      body.classList.add('transition-colors', 'duration-500', 'ease-in-out');
      if (isDarkMode) {
        body.classList.add('dark', 'bg-gray-800');
        body.classList.remove('bg-white');
        body.setAttribute('data-theme', 'dark');
      } else {
        body.classList.remove('dark', 'bg-gray-800');
        body.classList.add('bg-white');
        body.setAttribute('data-theme', 'light');
      }
      localStorage.setItem('darkmode', isDarkMode);
    }, [isDarkMode]);


    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <div className='dark_mode'>

             <button
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        className="focus:outline-none-1 bg-transparent text-white p-3 transition"
      >
        {isDarkMode ? (
          <BsFillSunFill className="w-5 h-5 text-yellow-400 hover:text-yellow-500 dark:text-yellow-300 dark:hover:text-yellow-200 cursor-pointer" />
        ) : (
          <FaMoon className="w-5 h-5 text-gray-300 hover:text-gray-400 cursor-pointer" />
        )}
      </button>
        </div>
    )
}
