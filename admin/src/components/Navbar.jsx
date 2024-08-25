import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { setUser } from '../redux/slices/authSlice'
import toast from 'react-hot-toast'

const Navbar = () => {
    const links = [
            {
                id:1,
                name:"Home",
                path:"/"
            } ,   
            {
                id:2,
                name:"Add New Member",
                path:"/team/add"
            } ,   
            {
                id:3,
                name:"Team",
                path:"/team"
            } ,       
    ]
    const dispatch = useDispatch()
    const location = useLocation()
    const handleLogout = async() =>{
        try{
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/auth/logout`,{
                credentials:'include'
            })
            const data = await res.json()
            if(data.success){
                    toast.success(data.message)
                    dispatch(setUser(null))
            }else{
                toast.error(data.message)

            }
        }catch(error){
            console.log(error)
            toast.error("Something went wrong.")
        }
    }
  return (
    <nav className='shadow-lg'>
      <div className="container mx-auto p-5 flex justify-between items-center">
           <ul>
           {
            links.map((link)=>{
                return <Link key={link.id} to={link.path} className={`mx-1 px-3 py-1.5 rounded-full ${location.pathname == link.path ? 'bg-[var(--clr-orange)] text-white':'hover:bg-[var(--clr-orange)] hover:text-white'} `}>{link.name}</Link>
            })
           }
           
           </ul>
            <button className='bg-[var(--clr-orange)] hover:bg-orange-500 text-white rounded-lg py-1 px-3' onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  )
}

export default Navbar
