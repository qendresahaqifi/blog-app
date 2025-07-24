import React from 'react';
import { FaLock, FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="relative bg-white dark:bg-gray-700 rounded-lg shadow-lg w-full max-w-sm p-6 transition duration-300 ease-out">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition cursor-pointer"
          aria-label="Close"
        >
          <FaTimes size={18} />
        </button>

        <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white mb-6"><FaLock className='inline-flex items-center mr-2' />Login</h2>

        <form className="space-y-4">
          {/* ------ Email ------ */}
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            className="w-full px-4 py-2 text-gray-700 dark:text-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* ------ Password ------ */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 text-gray-700 border dark:text-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* ------ Login button ------ */}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded shadow transition cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
