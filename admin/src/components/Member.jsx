import React from 'react'
import {FaTrash,FaEdit} from "react-icons/fa"
const Member = ({ member ,handleRemoveMember,handleUpdateMember}) => {
  
    return (
        <div className='lg:w-1/4 md:w-1/2 w-full text-center flex flex-col items-center justify-center gap-2'>
            <img src={member.profilePic} alt={member.name} className='w-32 mx-auto border rounded-full' />
            <h2 className='text-2xl font-bold text-[var(--clr-dark)]'>{member.name}</h2>
            <h2>{member.role}</h2>
            <div className='flex items-center gap-3'>
                <FaTrash  className='cursor-pointer text-red-500' size={18} onClick={()=>handleRemoveMember(member._id)}/>
                <FaEdit className="text-[var(--clr-dark)] cursor-pointer" size={20} onClick={()=>handleUpdateMember(member)}/>
            </div>
        </div>
    )
}

export default Member
