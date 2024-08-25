import React, { useEffect } from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import useFetchTeamMembers from '../hooks/useFetchTeamMembers'
import Heading from '../components/Heading'

const Team = () => {
  const members = useFetchTeamMembers()
  useEffect(() => {
    document.title = "Our Team - Innovoja Sustainable"
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className='py-24 text-center'>
      <div className='my-10'>
        <Heading text={"Our Team"} />
      </div>

      <div className="flex flex-wrap container mx-auto ">

        {
          members.map((member) => {
            return <div className='lg:w-1/3 md:w-1/2 w-full p-5' key={member._id}>
              <div className='shadow-lg cursor-pointer bg-white'>
                <img src={member.profilePic} alt="member" className='hover:opacity-80' />
                <div className='flex flex-col gap-2 lg:p-10 p-5 items-center bg-white text-[var(--clr-dark)]'>
                  <h1 className='text-2xl font-bold'>{member.name}</h1>
                  <p>{member.role}</p>
                  <a href={member.url} target='_blank' className='bg-[var(--clr-dark)] text-white p-3 rounded-full'>
                    <FaLinkedinIn size={20} />
                  </a>
                </div>
              </div>
            </div>
          })
        }


      </div>

    </section>

  )
}

export default Team
