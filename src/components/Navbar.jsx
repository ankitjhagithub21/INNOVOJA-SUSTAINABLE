import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const links = [
    {
      id:1,
      name:"About Us",
      path:"/about"
    },
    {
      id:2,
      name:"Our Tech",
      path:"/technology"
    },
    {
      id:3,
      name:"Applications",
      path:"/applications"
    },
    {
      id:4,
      name:"Resources",
      path:"/resources"
    },
    {
      id:5,
      name:"Media",
      path:"/media"
    },
    {
      id:6,
      name:"How to Buy",
      path:"/how-to-buy"
    },

  ]
  const [active,setActive] = useState(0)
  return (
    <header className='bg-[#242941] text-white px-5 py-4 fixed top-0 shadow-lg z-50 w-full'>
      <nav className='container mx-auto flex lg:flex-row flex-col gap-2 flex-wrap items-center justify-between'>
        <Link to={"/"}>
        <img src="https://ionomr.com/wp-content/uploads/2020/09/Ionomr-Current-logo-white.png" alt="logo"  width={200}/>
        </Link>
        <ul className='flex items-center'>
         {
          links.map((link,index) => {
            return <Link to={link.path} key={link.id} className={`${active==index ? 'bg-[#F4965D]':''} px-3 py-1 rounded-full`} onClick={()=>setActive(index)}>{link.name}</Link>
          })
         }
        </ul>
        <button className='px-4 py-2 bg-[#F4965D] rounded-full'>Get More Info</button>
      </nav>
    </header>
  )
}

export default Navbar
