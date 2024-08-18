import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoIosClose, IoIosMenu } from "react-icons/io";
import links from '../data/links';

const Navbar = () => {
  const location = useLocation();
  const [menu, setMenu] = useState(false);

  return (
    <header className='bg-white text-[var(--clr-dark)] md:px-5 px-2 py-2 fixed top-0 shadow-lg z-50 w-full left-0'>
      <nav className='container mx-auto flex lg:flex-row md:flex-col flex-row gap-2 items-center justify-between'>
        <Link to="/">
          <img
            src="/logo.png"
            alt="logo"
            loading='lazy'
            className='w-48'
          />
        </Link>

        {/* Desktop Menu */}
        <ul className='md:flex hidden items-center'>
          {links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                className={`${
                  location.pathname === link.path 
                    ? 'bg-[var(--clr-orange)] text-white'  
                    : 'hover:bg-[var(--clr-orange)] hover:text-white'
                } px-3 py-2 mx-1 rounded-full`}
                onClick={() => {
                  setMenu(false);
                  window.scrollTo(0, 0);
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/get-more-info"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className='px-4 py-2 bg-[var(--clr-orange)] transition duration-300 rounded-full md:block hidden hover:bg-[var(--clr-dark)] hover:text-white'
        >
          Get More Info
        </Link>
        
        {/* Mobile Menu Icon */}
        <IoIosMenu
          className='md:hidden block cursor-pointer'
          size={30}
          onClick={() => {
            setMenu(true);
          }}
        />
        
        {/* Mobile Menu */}
        <div
          className={`${
            menu ? 'translate-y-0' : '-translate-y-full'
          } fixed inset-0 bg-[var(--clr-sky)] text-white flex flex-col gap-5 items-center justify-center transition-transform duration-500 ease-in-out md:hidden z-50`}
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
              className={`text-xl px-6 py-2 font-bold rounded-full ${
                location.pathname === link.path && 'bg-[var(--clr-orange)]'
              }`}
              onClick={() => {
                setMenu(false);
                window.scrollTo(0, 0);
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/get-more-info"
            onClick={() => {
              setMenu(false);
              window.scrollTo(0, 0);
            }}
            className='px-4 py-2 text-xl font-bold bg-[var(--clr-dark)] rounded-full hover:bg-[var(--clr-orange)] hover:text-white'
          >
            Get More Info
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
