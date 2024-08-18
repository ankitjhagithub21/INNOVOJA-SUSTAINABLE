import React, { useState} from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux';
import { setMembers } from '../redux/slices/teamSlice';

const UpdateMember = ({ member, setIsOpen }) => {
    const [name, setName] = useState(member.name || '');
    const [profilePic, setProfilePic] = useState(member.profilePic || '');
    const [role, setRole] = useState(member.role || '');
    const [url, setUrl] = useState(member.url || '');
    const [loading, setLoading] = useState(false);
    const {members} = useSelector(state=>state.team)
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;

        const updateUrl = `${import.meta.env.VITE_SERVER_URL}/team/member/${member._id}`;

        try {
            setLoading(true);
            const res = await fetch(updateUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify({ name, profilePic, role, url })
            });

            const data = await res.json();

            if (data.success) {
                toast.success(data.message);
                const updatedMembers =  members.map(m => m._id === member._id ? { ...m, name, profilePic, role, url } : m)
                dispatch(setMembers(updatedMembers))
                setIsOpen(false);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("Something went wrong.");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='h-screen w-full flex items-center justify-center p-5 text-[var(--clr-dark)] z-50 backdrop-blur-md fixed top-0 left-0'>
            <button className='absolute top-3 right-5' onClick={() => setIsOpen(false)}>X</button>
            <div className='md:w-1/2 w-full p-5 rounded-xl bg-white'>
                <h1 className='font-bold text-3xl text-center mb-5'>Update Member Details</h1>
                <form className='flex flex-col gap-3 text-lg' onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder='Enter member name' 
                        className='outline-none bg-gray-300 px-4 py-3 rounded-full' 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />

                    <input 
                        type="text" 
                        value={profilePic} 
                        onChange={(e) => setProfilePic(e.target.value)} 
                        placeholder='Paste profile image URL' 
                        className='outline-none bg-gray-300 px-4 py-3 rounded-full' 
                        required 
                    />

                    <input 
                        type="text" 
                        value={role} 
                        onChange={(e) => setRole(e.target.value)} 
                        placeholder='Enter member role or position' 
                        className='outline-none w-full bg-gray-300 px-4 py-3 rounded-full' 
                        required 
                    />

                    <input 
                        type="text" 
                        value={url} 
                        onChange={(e) => setUrl(e.target.value)} 
                        placeholder='Paste LinkedIn account URL' 
                        className='outline-none w-full bg-gray-300 px-4 py-3 rounded-full' 
                        required 
                    />

                    <button type='submit' className='py-3 bg-[var(--clr-orange)] text-white hover:bg-[var(--clr-dark)] rounded-full'>
                        {loading ? 'Saving...' : 'Save Changes'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UpdateMember;
