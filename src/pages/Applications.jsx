import React, { useEffect } from 'react'

const Applications = () => {
    const boxes = [
        {
            id:1,
            image:"https://ionomr.com/wp-content/uploads/2017/07/acid-alkali-recovery-metals-b-812x458.jpg",
            title:"Acid/Alkali Recovery & Metals",
            category:"Chemicals"
        },
        {
            id:2,
            image:"https://ionomr.com/wp-content/uploads/2017/07/acid-alkali-recovery-metals-b-812x458.jpg",
            title:"AEM Electrolysis",
            category:"Hydrogen"
        },
        
        {
            id:3,
            image:"https://ionomr.com/wp-content/uploads/2018/10/hydrogen-fuel-cells-aemfc-a-812x458.jpg",
            title:"AEM Fuel Cells (AEMFC)",
            category:"Hydrogen"
        },
        
        
    ]
    const buttons = [
        "All",
        "Chemicals",
        "Hydrogen"
    ]
    useEffect(()=>{
        document.title = "Applications - Innovoja sustainable"
    },[])
  return (
   <section className='py-24 px-5'>
    <h1 className='text-5xl font-bold text-center mt-5'>Applications</h1>
    <div className='flex items-center justify-center my-10 gap-10 text-lg'>
      {
        buttons.map((button,index)=>{
            return <button key={index}>{button}</button>
        })
      }
    </div>
    <div className="container mx-auto flex flex-wrap">
        {
            boxes.map((box)=>{
                return <div key={box.id} className='p-5 lg:w-1/3 md:w-1/2 w-full'>
                 <div className='flex flex-col  cursor-pointer'>
                 <img src={box.image} alt="" className='hover:opacity-80'/>
                <div className='p-5 bg-[#F4965D] '>
                <h1 className='text-xl font-bold hover:text-[#242941]'>{box.title}</h1>
                </div>
                 </div>
                </div>
            })
        }
    </div>
   </section>
  )
}

export default Applications
