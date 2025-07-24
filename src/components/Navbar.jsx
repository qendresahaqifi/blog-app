import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebook, FaDribbble, FaBars } from "react-icons/fa";
import { FaXmark, FaXTwitter } from "react-icons/fa6";
import '../App.css'
import Modal from './Modal';
import AppTheme from '../layout/AppTheme';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/contact', label: 'Contact' },
  ];
  
  //modal details
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className='bg-gray-700 text-white fixed top-0 left-0 right-0 z-50'>
      <nav className='p-4 max-w-7xl mx-auto flex justify-between items-center'>
        {/* ------ Logo ------ */}
        <Link to='/' className='text-xl font-bold'>
          Blogger<span className='text-yellow-400'>HQ</span>
        </Link>

        {/* ------ Desktop Nav ------ */}
        <ul className='md:flex gap-12 md:gap-8 mr-10 text-lg hidden'>
          {navLinks.map(link => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({isActive, isPending }) =>
                            [
                            "px-3 py-2 rounded",
                            "transition-all duration-200 ease-in",
                            isActive
                              ? "text-yellow-400 font-semibold"
                              : isPending
                              ? "text-gray-400"
                              : "text-white hover:text-yellow-300"
                            ].join(" ")
                          }
                          >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Social Icons + Button (Desktop) */}
        <div className='lg:flex gap-4 items-center hidden'>
          <a href="/" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-400'>
            <FaFacebook />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-400'>
            <FaDribbble />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-400'>
            <FaXTwitter />
          </a>
          <button onClick={openModal} className='bg-yellow-400 px-6 py-2 font-medium rounded hover:bg-white hover:text-yellow-400 cursor-pointer transition-all duration-200 ease-in'>
            Log in
          </button>
          <AppTheme />
        </div>

        {/* ------ Modal component ------ */}
        <Modal isOpen={isModalOpen} onClose={closeModal} />

        {/* Mobile Menu Button */}
        <div className='md:hidden flex'>
          <button className='cursor-pointer' onClick={toggleMenu}>
            {isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />}
          </button>
          
          <AppTheme />
        </div>
      </nav>

      {/* Mobile Nav */}
      <div>
        <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white text-gray-700 
          ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
          {navLinks.map(link => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                onClick={toggleMenu}
                className='mr-4'
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
