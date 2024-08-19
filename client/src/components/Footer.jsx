import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoIosPhonePortrait, IoIosMailOpen } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
import links from '../data/links';

const Footer = () => {
  const socialIcons = [
    { icon: <FaTwitter />, link: '#' },
    { icon: <FaFacebookF />, link: '#' },
    { icon: <FaLinkedinIn />, link: '#' },
  ];

  const contactDetails = [
    { icon: <IoIosPhonePortrait size={25} color='var(--clr-orange)' />, text: '+91-12345678' },
    { icon: <IoIosMailOpen size={25} color='var(--clr-orange)' />, text: 'sales@gmail.com' },
    { icon: <CiLocationOn size={25} color='var(--clr-orange)' />, text: '111-2386 East Mall Vancouver' },
  ];

  return (
    <footer>
      <div className="container mx-auto py-12 flex flex-wrap border-b">
        <div className="flex flex-col gap-5 lg:w-1/3 md:w-1/2 w-full p-5">
          <img src="/logo.png" alt="Logo" width={200} className="bg-white" />
          <p className="text-sm text-gray-400">
            Ionomr Innovations develops the world’s most advanced ion-exchange membranes & polymers.
          </p>
          <div className="flex gap-3">
            {socialIcons.map(({ icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--clr-orange)] rounded-full p-3 text-[var(--clr-dark)] hover:bg-gray-200 transition duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col gap-5 lg:w-1/3 md:w-1/2 w-full p-5">
          <h2 className="font-bold text-xl">Contact Us</h2>
          {contactDetails.map(({ icon, text }, index) => (
            <div key={index} className="flex items-center gap-5">
              {icon}
              <p>{text}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col gap-5 lg:w-1/3 md:w-1/2 w-full p-5">
          <h2 className="font-bold text-xl">Information</h2>
          <div className="gap-5 grid grid-cols-2">
            <Link to="/" className="hover:text-[var(--clr-orange)] text-gray-400">Home</Link>
            {links.map(({ id, path, name }) => (
              <Link
                to={path}
                key={id}
                onClick={() => window.scrollTo(0, 0)}
                className="hover:text-[var(--clr-orange)] text-gray-400"
              >
                {name}
              </Link>
            ))}
            <Link to="/contact" className="hover:text-[var(--clr-orange)] text-gray-400">Contact Us</Link>
          </div>
        </div>
      </div>
      <p className="p-10 text-center md:text-left">
        Innovoja sustainable Inc. © 2024. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
