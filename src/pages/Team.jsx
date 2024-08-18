import React, { useEffect } from 'react'
import { FaLinkedinIn } from 'react-icons/fa'

const Team = () => {
  useEffect(()=>{
    document.title = "Our Team - Innovoja Sustainable"
  },[])
  return (
    <section>
    <div className="container px-5 py-24 mx-auto">
    <h1 className="lg:text-5xl text-3xl  md:mt-20 lg:mt-5 mt-5 mb-5 text-center">
          Our Team
        </h1>
      <div className="flex flex-wrap">
      
        <div className='lg:w-1/3 md:w-1/2 w-full p-5'>
            <div className='shadow-lg cursor-pointer'>
              <img src="https://ionomr.com/wp-content/uploads/2024/03/Bill-Haberlin-scaled-e1710087864260-812x820.jpg" alt="member" className='hover:opacity-80'/>
            <div className='flex flex-col gap-2 p-10 items-center bg-white text-[var(--clr-dark)]'>
            <h1 className='text-2xl font-bold'>Bill Haberlin</h1>
              <p>Chief Executive Officer & Director</p>
              <a href="#" target='_blank' className='bg-[var(--clr-dark)] text-white p-3 rounded-full'>
                <FaLinkedinIn size={20}/>
              </a>
            </div>
            </div>
        </div>
        <div className='lg:w-1/3 md:w-1/2 w-full p-5'>
            <div className='shadow-lg cursor-pointer'>
              <img src="https://ionomr.com/wp-content/uploads/2024/03/Morris-Tan-scaled-e1710087490241-812x820.jpg" alt="member" className='hover:opacity-80'/>
            <div className='flex flex-col gap-2 p-10 items-center bg-white text-[var(--clr-dark)]'>
            <h1 className='text-2xl font-bold'>Moris Tan</h1>
              <p>Chief Executive Officer & Director</p>
              <a href="#" target='_blank' className='bg-[var(--clr-dark)] text-white p-3 rounded-full'>
                <FaLinkedinIn size={20}/>
              </a>
            </div>
            </div>
        </div>
        <div className='lg:w-1/3 md:w-1/2 w-full p-5'>
            <div className='shadow-lg cursor-pointer'>
              <img src="https://ionomr.com/wp-content/uploads/2024/05/IMG_6066_1-concentrate-812x820.jpg" alt="member" className='hover:opacity-80'/>
            <div className='flex flex-col gap-2 p-10 items-center bg-white text-[var(--clr-dark)]'>
            <h1 className='text-2xl font-bold'>Benjman Britton</h1>
              <p>Chief Executive Officer & Director</p>
              <a href="#" target='_blank' className='bg-[var(--clr-dark)] text-white p-3 rounded-full'>
                <FaLinkedinIn size={20}/>
              </a>
            </div>
            </div>
        </div>
       
      </div>
    </div>
  </section>
  
  )
}

export default Team
