import React, { useEffect } from 'react'
import Services from '../components/Services'

const Technology = () => {
  const data = {
    heading: "Technology",
    para: ""
  }
  useEffect(()=>{
    document.title = "Our Technology - Innovoja sustainable"
    
  },[])

  return (
    <section className='py-24'>
     
      <Services data={data} />
      <div className='container mx-auto flex flex-wrap items-center'>
        <div className='md:w-1/2 w-full md:block hidden'>
          <img src="https://ionomr.com/wp-content/uploads/2018/10/ionomr-advantage-1-e1540335064720.jpg?id=855" alt="" />
        </div>
        <div className='md:w-1/2 w-full flex flex-col gap-5 lg:p-10 p-5'>
          <h2 className='text-[var(--clr-orange)]'>Our Technology</h2>
          <h1 className=' text-4xl font-bold'>Ionomr's Advantage</h1>
          <p>Ionomr’s game changing membrane and polymer products are poised to take advantage of near-term growth opportunities in the burgeoning clean-tech sector thanks to their high efficiency, durability and cost-effectiveness.</p>
          <p>Produced using hydrocarbon materials and a revolutionary polymer structure, Ionomr’s polymer-based solutions avoid a vast range of environmental problems associated with the production, use and disposal of fluorine-containing polymers predominantly used in clean technologies today.
            <ul className='list-disc my-5 flex flex-col gap-3'>
              <li>Environmentally non-toxic</li>
              <li>High ionic conductivity

              </li>
              <li>Long lifetime in harsh conditions</li>
            </ul>
            <p>Given our robust mechanical properties, Ionomr is able to produce ultra-thin membranes with industry-leading performance for a range of applications including fuel cells, hydrogen production, advanced energy storage and on-site chemical recovery.</p>

          </p>
        </div>

      </div>
    </section>
  )
}

export default Technology
