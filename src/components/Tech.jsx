import React from 'react'
import { Link } from "react-router-dom"
const Tech = () => {
    return (
        <section className='w-full p-5'>
            <div className="lg:w-2/3 w-full p-5 mx-auto flex flex-col gap-5">
                <h1 className='lg:text-5xl text-3xl font-bold text-center'>Our Breakthrough Technology</h1>
                <p className='mb-10'>Ionomr has developed revolutionary ion exchange membrane technology that drastically improves efficiency and performance while minimizing cost and environmental impact:</p>
                <ul className='list-disc flex flex-col gap-3'>
                    <li>Hydrogen generation to fuel the hydrogen economy</li>
                    <li>Hydrogen fuel cells to power vehicles, ships, buildings and more</li>
                    <li>Conversion of CO2 to synthetic fuels</li>
                    <li>Onsite recovery of chemicals for heavy industry – lithium, mining and electronics</li>
                </ul>
                <p className='mt-10'>Explore <Link to="/applications" className='underline text-[#F4965D]'>our Applications Hub</Link> to learn more about specific system use.</p>
             
            </div>
            <div className='container mx-auto text-center flex flex-wrap font-bold text-3xl p-5'>
                <div className='w-1/2 md:p-10 p-5'>
                    <img src="https://ionomr.com/wp-content/uploads/2018/10/aem-electrolysis-a-740x416.jpg" alt="" className='hover:scale-105 cursor-pointer transition duration-500' />
                    <h1 className='mt-5'>Hydrogen</h1>
                </div>
                <div className='w-1/2 lg:p-10 p-5'>
                    <img src="https://ionomr.com/wp-content/uploads/2018/10/chlor-alkali-process-a-740x416.jpg" alt="" className='hover:scale-105 cursor-pointer transition duration-500' />
                    <h1 className='mt-5'>Chemicals</h1>
                </div>
                <Link className='px-6 py-2 bg-[#F4965D] rounded-full leading-relaxed mx-auto text-sm' to={"/applications"}>View our Applications</Link>
            </div>
           
        </section>
    )
}

export default Tech
