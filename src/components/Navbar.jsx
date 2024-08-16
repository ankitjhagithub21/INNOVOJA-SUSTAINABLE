import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoIosClose, IoIosMenu } from "react-icons/io";
import links from '../data/links';

const Navbar = () => {
  const location = useLocation();
  const [menu, setMenu] = useState(false);

  return (
    <header className='bg-[#242941] text-white px-5 py-4 fixed top-0 shadow-lg z-50 w-full left-0'>
      <nav className='container mx-auto flex lg:flex-row md:flex-col flex-row gap-2 flex-wrap items-center justify-between'>
        <Link to="/">
          <img
            src="https://ionomr.com/wp-content/uploads/2020/09/Ionomr-Current-logo-white.png"
            alt="logo"
            loading='lazy'
            width={200}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className='md:flex hidden items-center'>
          {links.map((link, index) => (
            <li key={link.id}>
              <Link
                to={link.path}
                className={`${
                  location.pathname === link.path && 'bg-[#F4965D]' 
                } px-3 py-1 rounded-full`}
                onClick={() => setMenu(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <button className='px-4 py-2 bg-[#F4965D] rounded-full md:block hidden'>Get More Info</button>
        
        {/* Mobile Menu Icon */}
        <IoIosMenu
          className='md:hidden block cursor-pointer'
          size={30}
          onClick={() => setMenu(true)}
        />
        
        {/* Mobile Menu */}
        <div
          className={`${
            menu ? 'h-screen' : 'h-0 overflow-hidden'
          } top-0 w-full left-0 bg-[#90B0CF] flex flex-col gap-5 items-center justify-center transition-all duration-500 absolute md:hidden z-50  `}
        >
          <IoIosClose
            className='absolute top-3 right-3 cursor-pointer'
            size={40}
            onClick={() => setMenu(false)}
          />
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={`text-2xl px-6 rounded-full py-2 font-bold ${
                location.pathname === link.path && 'bg-[#F4965D]' 
              }`}
              onClick={() => setMenu(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
