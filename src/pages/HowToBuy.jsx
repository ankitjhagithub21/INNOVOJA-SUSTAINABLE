import React from 'react'
import Overlay from '../components/Overlay'
import {Link} from "react-router-dom"


const HowToBuy = () => {
  return (
    <>
    <section className='how-to-buy relative h-[70vh] w-full'>
        <Overlay/>
        <div className='lg:w-2/3 w-full h-full flex flex-col gap-5 p-5 relative z-40 justify-center mx-auto'>
          <h1 className='lg:text-5xl text-3xl font-bold mt-20'>How to Buy</h1>
          <p className='text-white text-lg tracking-wide'>Customers can make a purchase directly through Ionomr sales, as well as authorized sales representatives and distributors. Feel free to contact one of our trusted sales representatives below for your country/region, otherwise contact us below with your inquiry.</p>
        </div>
        
    </section>
    <div className='py-12 text-center'>
      <h1 className='font-bold text-3xl mb-10'>Sales and Channel Partners Search</h1>
      <Link className='px-12 py-3 bg-[var(--clr-orange)] rounded-full text-lg' to={"/contact"}>Contact Us</Link>
    </div>
    </>
  )
}

export default HowToBuy
