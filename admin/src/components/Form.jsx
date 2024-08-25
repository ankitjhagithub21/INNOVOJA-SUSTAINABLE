import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/slices/authSlice'
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";

const Form = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword,setShowPassword] = useState(false)

  const dispatch = useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (loading) return;
    const url = `${import.meta.env.VITE_SERVER_URL}/auth/login`

    try {
      setLoading(true)
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()

      if (data.success) {
       if(data.user.role==="admin"){
        dispatch(setUser(data.user))
        toast.success(data.message)
       }else{
       toast.error("You are not admin.")

       }
       
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error("Something went wrong.")
      console.log(error)
    } finally {
      setLoading(false)
    }
  }



  return (
    <div className='min-h-screen w-full flex items-center justify-center p-5 text-[var(--clr-dark)]'>


      <div className='md:w-1/2 w-full lg:w-1/3  p-5 rounded-xl form  '>
        <h1 className='font-bold text-3xl  text-center mb-5'>Login Page</h1>
        <form className='flex flex-col gap-3 text-lg' onSubmit={handleSubmit}>

          <input type="email" placeholder='Enter your email' className='outline-none bg-gray-300 px-4 py-3 rounded-full' value={email} onChange={(e) => setEmail(e.target.value)} required />
         <div className='relative'>
         <input type={showPassword ? 'text':'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' className='outline-none w-full bg-gray-300 px-4 py-3 rounded-full' required />
          <button type='button' className='absolute top-4 right-3 ' onClick={()=>setShowPassword(!showPassword)}>
            {
              showPassword ? <FaRegEye/> : <FaRegEyeSlash/>
            }
          </button>
         </div>
          <button type='submit' className='py-3 bg-[var(--clr-orange)] text-white hover:bg-[var(--clr-dark)] rounded-full'>
            {
              loading ? 'Loading...' :'Login'
            }
          </button>
        </form>

      </div>
    </div>
  )
}

export default Form
