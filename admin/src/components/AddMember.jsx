import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'



const AddMember = () => {
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [role, setRole] = useState('')
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (loading) return;
        const url = `${import.meta.env.VITE_SERVER_URL}/team/add`

        try {
            setLoading(true)
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify({ name, profilePic, role, url })
            })

            const data = await res.json()

            if (data.success) {

                toast.success(data.message)
                navigate("/team")
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
        <div className='w-full my-12 flex items-center justify-center p-5 text-[var(--clr-dark)]'>


            <div className='md:w-1/2 w-full  p-5 rounded-xl form  '>
                <h1 className='font-bold text-3xl  text-center mb-5'>Add New Member</h1>
                <form className='flex flex-col gap-3 text-lg' onSubmit={handleSubmit}>

                    <input type="text" placeholder='Enter member name' className='outline-none bg-gray-300 px-4 py-3 rounded-full' value={name} onChange={(e) => setName(e.target.value)} required />

                    <input type="text" value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder='Paste profile image url' className='outline-none  bg-gray-300 px-4 py-3 rounded-full' required />
                    <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder='Enter member role or position' className='outline-none w-full bg-gray-300 px-4 py-3 rounded-full' required />
                    <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder='Paste linkedin account url' className='outline-none w-full bg-gray-300 px-4 py-3 rounded-full' required />


                    <button type='submit' className='py-3 bg-[var(--clr-orange)] text-white hover:bg-[var(--clr-dark)] rounded-full'>
                        {
                            loading ? 'Loading...' : 'Add'
                        }
                    </button>
                </form>

            </div>
        </div>
    )
}

export default AddMember
