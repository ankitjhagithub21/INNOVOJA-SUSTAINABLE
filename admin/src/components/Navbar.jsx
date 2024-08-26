import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { setUser } from '../redux/slices/authSlice'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { RiCloseCircleFill, RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
    const links = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "About",
            path: "/about"
        },
        {
            id: 3,
            name: "Add New Member",
            path: "/team/add"
        },
        {
            id: 4,
            name: "Team",
            path: "/team"
        },
    ]
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const location = useLocation()

    const handleLogout = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/auth/logout`, {
                credentials: 'include'
            })
            const data = await res.json()
            if (data.success) {
                toast.success(data.message)
                dispatch(setUser(null))
            } else {
                toast.error(data.message)

            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong.")
        }
    }
    return (
        <nav className='shadow-lg fixed top-0 w-full bg-white z-50'>
            <div className="container mx-auto py-2 px-5 flex justify-between items-center">
                <Link to="/">
                    <img
                        src="/logo.png"
                        alt="logo"
                        loading='lazy'
                        className='w-48'
                    />
                </Link>
                <button onClick={() => setIsOpen(true)} className='md:hidden block'>
                    <RiMenu3Line size={25} />
                </button>
                <ul className='hidden md:block'>
                    {
                        links.map((link) => {
                            return <Link key={link.id} to={link.path} className={`mx-1 px-3 py-1.5 rounded-full ${location.pathname == link.path ? 'bg-[var(--clr-orange)] text-white' : 'hover:bg-[var(--clr-orange)] hover:text-white'} `}>{link.name}</Link>
                        })
                    }
                    <button className='bg-[var(--clr-orange)] rounded-full hover:bg-orange-500 text-white py-1 px-3' onClick={handleLogout}>Logout</button>

                </ul>

                <ul className={` md:hidden mobile-menu  absolute flex flex-col gap-3 bg-white justify-center items-center w-full top-0 ${isOpen ? 'left-0' : '-left-full'} h-screen z-50`}>
                    {
                        links.map((link) => {
                            return <Link key={link.id} to={link.path} onClick={() => setIsOpen(false)} className={`mx-1 px-3 py-1.5 rounded-full ${location.pathname == link.path ? 'bg-[var(--clr-orange)] text-white' : 'hover:bg-[var(--clr-orange)] hover:text-white'} `}>{link.name}</Link>
                        })

                    }
                    <button className='bg-[var(--clr-orange)] rounded-full hover:bg-orange-500 text-white py-1 px-3' onClick={handleLogout}>Logout</button>
                    <button onClick={() => setIsOpen(false)} className='absolute top-2 right-2 '>
                        <RiCloseCircleFill size={25} />
                    </button>

                </ul>


            </div>
        </nav>
    )
}

export default Navbar
