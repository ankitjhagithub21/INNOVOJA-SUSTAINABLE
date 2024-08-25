import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
 
    const {user} = useSelector(state=>state.auth)
   
  return (
    <div className='h-screen w-full flex flex-col gap-2 items-center justify-center'>
     <h1 className='text-3xl font-bold'>Your Profile</h1>
     <img src={user.profilePic} alt="Profile Image" className='w-32 rounded-full'/>
     <p className='text-2xl font-bold'>{user.username}</p>
     <p className='text-lg'>{user.email}</p>
     
    </div>
  )
}

export default Profile
