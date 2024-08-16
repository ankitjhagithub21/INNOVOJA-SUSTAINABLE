import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const links = [
    {
      id:1,
      name:"About Us",
      path:"/about"
    }
  ]
  return (
    <header className='bg-[#242941]'>
      <nav className='container mx-auto flex flex-wrap items-center justify-between'>
        <Link to={"/"}>
        <img src="https://ionomr.com/wp-content/uploads/2020/09/Ionomr-Current-logo-white.png" alt="" />
        </Link>
        <ul>
         {
          links.map((link)=>{
            return <Link to={link.path} key={link.id}>{link.name}</Link>
          })
         }
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
