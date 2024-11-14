import React from 'react';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white p-4 shadow-md font-bebas h-16 z-50">
      <div className="flex items-center justify-between mx-48 max-w-7xl">
        <div className="flex items-center">
          <img src={logo} alt="Burger House Logo" className="w-40 h-10 mr-4" />
        </div>
        <ul className="flex space-x-14">
        <li>
            <a href="/" className="text-lg font-semibold text-amber-950 hover:text-white hover:bg-[#bf2222] hover:p-3 hover:rounded hover:shadow-rose-700 transition duration-300">
              Header
            </a>
          </li>
          <li>
            <a href="#products" className="text-lg font-semibold text-amber-950 hover:text-white hover:bg-[#bf2222] hover:p-3 hover:rounded hover:shadow-rose-700 transition duration-300">
              Products
            </a>
          </li>
          
          <li>
            <a href="#about" className="text-lg font-semibold text-amber-950 hover:text-white hover:bg-[#bf2222] hover:p-3 hover:rounded hover:shadow-rose-700 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-lg font-semibold text-amber-950 hover:text-white hover:bg-[#bf2222] hover:p-3 hover:rounded hover:shadow-rose-700 transition duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;





