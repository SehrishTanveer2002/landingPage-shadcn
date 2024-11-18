import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: 'Header', href: '/' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const menuItemStyles = "block py-3 font-semibold text-amber-950 hover:text-white hover:bg-[#bf2222] transition duration-300 text-xl md:hover:p-3 md:hover:rounded hover:shadow-[5px_10px_30px_rgba(255,103,2,0.336)] md:inline-flex";

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white p-4 md:shadow-md font-bebas h-16 md:h-20 z-50">
      <div className="flex justify-between mx-12 md:mx-48 max-w-4xl">
        <div className="flex items-center mr-10">
        <img 
  src={logo} 
  alt="Burger House Logo" 
  className="w-40 h-9 sm:w-40 sm:h-10 md:w-40 md:h-9 sm:max-w-[10rem] md:max-w-[10rem] -ml-19 sm:-ml-10 md:-ml-20"
/>

        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} style={{ outline: 'none', background: 'transparent', border: 'none' }}>
            <svg className="w-6 h-6 -mr-12 text-amber-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h26M4 12h26M4 18h26"></path>
            </svg>
          </button>
        </div>

        <ul className={`${isOpen ? 'absolute top-16 left-0 w-full bg-white bg-none md:static md:flex' : 'hidden md:flex'} md:space-x-14 sm:space-x-14 md:-mr-20`}>
          {menuItems.map(item => (
            <li key={item.name} className={`border-b border-gray-200 md:border-none ${isOpen ? 'w-full text-center' : ''}`}>
              <a href={item.href} className={menuItemStyles}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;







