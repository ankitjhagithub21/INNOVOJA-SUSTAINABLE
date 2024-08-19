import React from 'react'
import Overlay from './Overlay'
import Heading from './Heading'

const WhyInnovoja = () => {
  return (
    <div className='w-full py-24 why-innovoja text-[var(--clr-dark)] '>
      <Overlay/>
      <div className='lg:w-2/3 mx-auto w-full px-5 lg:px-0'>
        <Heading text={"Why Innovoja"}/>
        <p className='my-5 text-lg tracking-wide'>Ionomr’s high-performance, progressive materials stimulate the renewable energy economy by enabling cleaner and more efficient technology solutions. As the world’s preeminent producer of ion exchange membranes and polymers for hydrogen production, hydrogen fuel cells, energy storage, and sustainable chemical systems our products enable new approaches to tackling global climate issues that reduce system costs, increase efficiency and maximize durability. In the emerging market for carbon-free transport, Ionomr offers the only products capable of enabling systems that are cost-competitive with internal combustion engines.</p>
        <ul className='list-disc mb-10'>
            <li>Lower-cost hydrogen production</li>
            <li>Cost-effective and more durable hydrogen fuel cells to drive increased adoption of clean energy solutions
            Additionally, Ionomr technologies:</li>
            <li>Enable synthetic fuel production from the capture and processing of atmospheric carbon dioxide and other CO2 sources</li>
            <li>Allow effective chemical recovery in heavy industry: Lithium, mining, electronics, etc.</li>
        </ul>
        <button className='px-12 py-4 bg-[var(--clr-orange)] rounded-full text-white'>Learn More About Innovoja</button>
      </div>
    </div>
  )
}

export default WhyInnovoja
