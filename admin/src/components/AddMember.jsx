import React, { useState, useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'; 

const AddMember = () => {
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [role, setRole] = useState('');
    const [url, setUrl] = useState('');
    const [file, setFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const loadingBarRef = useRef(null); 

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
        setImagePreview(URL.createObjectURL(file));
    };

    const uploadImageToCloudinary = async () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', `${import.meta.env.VITE_UPLOAD_PRESET}`);

        try {
            const res = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`, formData);
            return res.data.secure_url;
        } catch (error) {
            console.error('Error uploading image:', error);
            toast.error('Image upload failed.');
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);
        loadingBarRef.current.continuousStart(); 

        let profilePicUrl = profilePic;

        if (file) {
            profilePicUrl = await uploadImageToCloudinary();
            if (!profilePicUrl) {
                setLoading(false);
                loadingBarRef.current.complete(); 
                return;
            }
        }

        const apiUrl = `${import.meta.env.VITE_SERVER_URL}/team/add`;

        try {
            const res = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ name, profilePic: profilePicUrl, role, url }),
            });

            const data = await res.json();

            if (data.success) {
                toast.success(data.message);
                navigate('/team');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error('Something went wrong.');
            console.log(error);
        } finally {
            setLoading(false);
            loadingBarRef.current.complete(); 
        }
    };

    return (
        <div className='w-full my-12 py-12 flex items-center justify-center p-5 text-[var(--clr-dark)]'>
            <LoadingBar color='var(--clr-orange)' ref={loadingBarRef} /> 
            <div className='md:w-1/2 w-full p-5 rounded-xl form'>
                <h1 className='font-bold md:text-3xl text-xl text-center mb-5'>Add New Member</h1>
                <form className='flex flex-col gap-3 text-lg' onSubmit={handleSubmit}>
                    <input
                        type='file'
                        onChange={handleFileChange}
                        name='image'
                        id='name'
                        className='hidden'
                        required
                    />

                    <label htmlFor='name' className='mx-auto  cursor-pointer relative md:h-44 md:w-44 h-28 w-28  rounded-lg bg-gray-200 flex items-center justify-center'>
                        {imagePreview ? (
                            <img src={imagePreview} alt='Image Preview' className='w-full object-contain h-full' />
                        ) : (
                            <p className='text-center'>Upload Image</p>
                        )}
                    </label>

                    <input
                        type='text'
                        placeholder='Enter member name'
                        className='outline-none bg-gray-300 px-4 py-3 rounded-full'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <input
                        type='text'
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        placeholder='Enter member role or position'
                        className='outline-none w-full bg-gray-300 px-4 py-3 rounded-full'
                        required
                    />
                    <input
                        type='text'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder='Paste LinkedIn account URL'
                        className='outline-none w-full bg-gray-300 px-4 py-3 rounded-full'
                        required
                    />
                    <button
                        type='submit'
                        className='py-3 bg-[var(--clr-orange)] text-white hover:bg-[var(--clr-dark)] rounded-full'
                    >
                        {loading ? 'Loading...' : 'Add'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddMember;
