import React from 'react'
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoIosPhonePortrait, IoIosMailOpen } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import links from '../data/links';
import { Link } from 'react-router-dom';
const Footer = () => {

  return (
    <footer>
      <div className="container mx-auto px-5 py-12 flex flex-wrap border-b">
        <div className='flex flex-col gap-5 lg:w-1/3 md:w-1/2 w-full p-5'>
          <img src="https://ionomr.com/wp-content/uploads/2020/09/Ionomr-Current-logo-white.png" alt="" width={200} />
          <p className='text-sm text-gray-400'>Ionomr Innovations develops the world’s most advanced ion-exchange membranes & polymers.</p>
          <div className='flex gap-3 items-center justify-start'>
            <a href='#' target='_blank' className='bg-[#F4965D] rounded-full p-3 text-[#242941] hover:bg-gray-200 transition duration-300'>
              <FaTwitter />
            </a>
            <a href='#' target='_blank' className='bg-[#F4965D] rounded-full p-3 text-[#242941] hover:bg-gray-200 transition duration-300'>
              <FaFacebookF />
            </a>
            <a href='#' target='_blank' className='bg-[#F4965D] rounded-full p-3 text-[#242941] hover:bg-gray-200 transition duration-300'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-5 lg:w-1/3 md:w-1/2 w-full p-5'>

          <h2 className='font-bold text-xl'>Contact Us</h2>
          <div className='flex items-center gap-5'>
            <IoIosPhonePortrait size={25} color='#F4965D'/>
            <p>+91-12345678</p>

          </div>
          <div className='flex items-center gap-5'>
            <IoIosMailOpen size={25} color='#F4965D'/>

            <p>sales@gmail.com</p>
          </div>
          <div className='flex items-center gap-5'>
            <CiLocationOn size={25} color='#F4965D'/>
            <p>111-2386 East Mall Vancouver</p>
          </div>
        </div>
        <div className='flex flex-col gap-5 lg:w-1/3 md:w-1/2 w-full p-5'>

          <h2 className='font-bold text-00xl'>Information</h2>
       
         
         <div className=' gap-5 grid grid-cols-2'>
          <Link to="/" className='hover:text-[#F4965D] text-gray-400'>Home</Link>
        
          {
            links.map((link)=>{
              return <Link to={link.path} key={link.id} className='hover:text-[#F4965D] text-gray-400'>{link.name}</Link>
            })
          }
         </div>
        </div>
      </div>
      <p className='p-10'>Innovoja sustainable  Inc. © 2024. All rights reserved.</p>
    </footer>
  )
}

export default Footer
