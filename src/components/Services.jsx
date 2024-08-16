import React from 'react'

const Services = () => {
  return (
   <section className='bg-[#2A304B] py-12 lg:px-5 px-0'>
     <div className='container mx-auto'>
        <h1 className='lg:text-5xl text-3xl font-bold text-center'>How Do We Do That?</h1>
        <p className='text-center my-10'>By creating the most durable and innovative ion exchange membranes and polymers:</p>
       
       <div className='flex flex-wrap lg:w-2/3 w-full mx-auto'>
      
        <div className='md:w-1/2 w-full p-5'>
            <img src="https://ionomr.com/wp-content/uploads/2018/10/ionomr-aemion-crop-1-800x878.jpg" loading='lazy' alt="" />
            <div className='bg-[#F4965D] p-5 flex flex-col items-start  gap-5'>
            <h2 className='hover:text-[#2A304B] cursor-pointer font-bold text-xl items-start transition duration-500'>Aemion+™</h2>
            <p>The most durable and high-performance Anion Exchange Membrane (AEM) on the market – unlocks high temperature alkaline electrochemistry which increases efficiency and decreases capital costs (CAPEX).</p>
            <button className='px-4 py-2 bg-[#2A304B] hover:bg-[#7DA2C7] transition duration-500 rounded-full'>Learn more</button>
            </div>
        </div>
        
        <div className='md:w-1/2 w-full p-5'>
            <img src="https://ionomr.com/wp-content/uploads/2018/10/ionomr-pemion-crop-1-800x878.jpg" loading='lazy' alt="" />
            <div className='bg-[#f3c982] p-5 flex flex-col items-start  gap-5'>
            <h2 className='hover:text-[#2A304B] cursor-pointer font-bold text-xl items-start transition duration-500'>Pemion™</h2>
            <p>Breakthrough hydrocarbon Proton Exchange Membrane (PEM) – provides considerably higher performance, durability and lower gas crossover while eliminating environmental concerns of Fluorine.</p>
            <button className='px-4 py-2 bg-[#2A304B] hover:bg-[#7DA2C7] transition duration-500 rounded-full'>Learn more</button>
            </div>
        </div>
       </div>

      </div>
    
   </section>
  )
}

export default Services
