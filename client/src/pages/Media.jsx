import React, { useEffect } from 'react'
import Heading from '../components/Heading'


const Media = () => {
  useEffect(()=>{
    document.title ="Media - Innovoja Sustainable"
  },[])
  return <section className='py-24 flex flex-col gap-10 text-center'>
   <Heading text={"News & Media"}/>
    <div className='container mx-auto flex flex-wrap text-left'>
     
      <div className='lg:w-1/3 md:w-1/2 w-full p-5 hover:-translate-y-1.5 cursor-pointer duration-500'>
       <div className='shadow-xl rounded-lg'>
       <img src="https://ionomr.com/wp-content/uploads/2024/01/Ionomr-GCT100-2024-350x350.png" alt="" className='w-full h-56 object-cover object-center rounded-lg' />
        <div className='p-3'>
          <h1 className='text-[var(--clr-orange)] text-xl font-bold my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, facere?</h1>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum deserunt at maxime, alias voluptatibus nostrum veniam doloribus laborum itaque, fuga ex excepturi commodi quod impedit, recusandae odit a. Dolorum.</p>
        </div>
       </div>
      </div>
      <div className='lg:w-1/3 md:w-1/2 w-full p-5  hover:-translate-y-1.5 cursor-pointer duration-500'>
       <div className='shadow-xl rounded-lg'>
       <img src="https://ionomr.com/wp-content/uploads/2023/06/AEM-Electrolyser-Reactor-350x350.png" alt="" className='w-full h-56 object-cover object-center rounded-lg' />
        <div className='p-3'>
          <h1 className='text-[var(--clr-orange)] text-xl font-bold my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, facere?</h1>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum deserunt at maxime, alias voluptatibus nostrum veniam doloribus laborum itaque, fuga ex excepturi commodi quod impedit, recusandae odit a. Dolorum.</p>
        </div>
       </div>
      </div>
      <div className='lg:w-1/3 md:w-1/2 w-full p-5  hover:-translate-y-1.5 cursor-pointer duration-500'>
       <div className='shadow-xl rounded-lg'>
       <img src="https://ionomr.com/wp-content/uploads/2023/12/Picture2-350x350.jpeg" alt="" className='w-full h-56 object-cover object-center rounded-lg' />
        <div className='p-3'>
          <h1 className='text-[var(--clr-orange)] text-xl font-bold my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, facere?</h1>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum deserunt at maxime, alias voluptatibus nostrum veniam doloribus laborum itaque, fuga ex excepturi commodi quod impedit, recusandae odit a. Dolorum.</p>
        </div>
       </div>
      </div>
      
      
    
    </div>
  </section>
}

export default Media
