import React from 'react'

const Services = () => {
  return (
   <section className='bg-[#2A304B] py-12 px-5'>
     <div className='w-full'>
        <h1 className='lg:text-5xl text-3xl font-bold text-center'>How Do We Do That?</h1>
        <p className='text-center my-10'>By creating the most durable and innovative ion exchange membranes and polymers:</p>
       
      </div>
      <div className='flex lg:w-2/3 mx-auto m flex-wrap items-center justify-center'>
        <div className='w-1/2   '>
            <img src="https://ionomr.com/wp-content/uploads/2018/10/ionomr-aemion-crop-1-800x878.jpg" alt="" width={300}/>
            <div>
            <h2>Aemion+™</h2>
            <p>The most durable and high-performance Anion Exchange Membrane (AEM) on the market – unlocks high temperature alkaline electrochemistry which increases efficiency and decreases capital costs (CAPEX).</p>
            <button>Learn more</button>
            </div>
        </div>
        <div className='w-1/2'>
            <img src="https://ionomr.com/wp-content/uploads/2018/10/ionomr-aemion-crop-1-800x878.jpg" alt="" width={300}/>
            <div>
            <h2>Aemion+™</h2>
            <p>The most durable and high-performance Anion Exchange Membrane (AEM) on the market – unlocks high temperature alkaline electrochemistry which increases efficiency and decreases capital costs (CAPEX).</p>
            <button>Learn more</button>
            </div>
        </div>
      </div>
   </section>
  )
}

export default Services
