import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosClose, IoIosMenu } from "react-icons/io";

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
  const [menu,setMenu] = useState(false)
  return (
    <header className='bg-[#242941] text-white px-5 py-4 fixed top-0 shadow-lg z-50 w-full left-0'>
      <nav className='container mx-auto flex lg:flex-row flex-col gap-2 flex-wrap items-center justify-between'>
        <Link to={"/"}>
        <img src="https://ionomr.com/wp-content/uploads/2020/09/Ionomr-Current-logo-white.png" alt="logo"  width={200}/>
        </Link>
        <ul className='md:flex hidden items-center '>
         {
          links.map((link,index) => {
            return <Link to={link.path} key={link.id} className={`${active==index ? 'bg-[#F4965D]':''} px-3 py-1 rounded-full`} onClick={()=>setActive(index)}>{link.name}</Link>
          })
         }
        </ul>
        <button className='px-4 py-2 bg-[#F4965D] rounded-full md:block hidden'>Get More Info</button>
      <IoIosMenu className='md:hidden block' size={30} onClick={()=>setMenu(true)}/>
      
      <div className={`${menu ? 'h-screen':'h-0 overflow-hidden'} top-0 w-full left-0 bg-[#90B0CF] flex flex-col gap-5 items-center justify-center transition-all duration-500 absolute md:hidden z-50`}>
      <IoIosClose className='absolute top-5 left-5' size={30} onClick={()=>setMenu(false)}/>
        {
          links.map((link)=>{
              return <Link to={link.path} className='text-2xl font-bold 'onClick={()=>setMenu(false)}>{link.name}</Link>
          })
        }
      </div>
      </nav>
    </header>
  )
}

export default Navbar
