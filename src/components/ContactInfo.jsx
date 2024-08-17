import React from 'react'
import { IoIosPhonePortrait, IoIosMailOpen } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import Overlay from './Overlay';

const ContactInfo = () => {
  return (
   <section className=' min-h-screen w-full flex flex-col items-center justify-center gap-10 contact-info relative'>
    <Overlay/>
    <h1 className='lg:text-5xl text-3xl font-bold z-40'>Contact Info</h1>
    <div className="container mx-auto flex flex-wrap text-center z-40">
        <div className='lg:w-1/3 md:w-1/2 w-full p-5'>
        <button  className='mx-auto bg-white text-[var(--clr-dark)] rounded-full p-4 mb-5'>
        <IoIosPhonePortrait size={30}/>
        </button>
          
            <h2 className='font-bold text-3xl '>Call Us</h2>
            <p>+14058495</p>
        </div>
        <div className='lg:w-1/3 md:w-1/2 w-full p-5'>
        <button  className='mx-auto bg-white text-[var(--clr-dark)] rounded-full p-4 mb-5'>
        <IoIosMailOpen size={30}/>
        </button>
            <h2 className='font-bold text-2xl'>Write Us</h2>
            <p>+sales@gmail.com</p>
        </div>
        <div className='lg:w-1/3 md:w-1/2 w-full p-5'>
        <button  className='mx-auto bg-white text-[var(--clr-dark)] rounded-full p-4 mb-5'>
        <CiLocationOn size={30}/>
        </button>
            <h2 className='font-bold text-2xl'>Visit Us</h2>
            <p>Vancouver, BC Canada
            V6T 1Z3</p>
        </div>
    </div>
   </section>
  )
}

export default ContactInfo
