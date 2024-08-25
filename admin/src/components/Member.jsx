import React from 'react'
import {FaLinkedinIn, FaTrash} from "react-icons/fa"
const Member = ({ member ,handleRemoveMember}) => {
 
    return (
        <div className='lg:w-1/4 md:w-1/2  p-4 w-full text-center '>
           <div className='flex flex-col items-center justify-center relative gap-2 p-2 bg-gray-200 shadow-xl rounded-lg'>
           <img src={member.profilePic} alt={member.name} className='w-32 h-32 object-contain object-center rounded-lg' />
            <h2 className='text-2xl font-bold text-[var(--clr-dark)]'>{member.name}</h2>
            <h2>{member.role}</h2>
          
                <FaTrash  className='cursor-pointer absolute  top-2 right-3 text-red-500' size={20} onClick={()=>handleRemoveMember(member._id)} />
                <a href={member.url} target='_blank' className='bg-[var(--clr-dark)] text-white p-3 rounded-full'>
                    <FaLinkedinIn size={20}/>
                </a>
           </div>
              
           
        </div>
    )
}

export default Member
