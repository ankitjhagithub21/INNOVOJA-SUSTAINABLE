import React from 'react'

const ContactForm = () => {
    return (
        <div className='lg:w-2/3 lg:mx-auto bg-white mt-10 rounded-lg shadow-lg mx-5'>
            <div className='flex flex-col p-5 gap-3'>
                <h1 className='mb-5 font-bold text-3xl text-[var(--clr-dark)]'>How Can We Help?</h1>
                <input
                    type="text"
                    placeholder='First name*'
                    className='w-full py-4 px-6 rounded-full'
                    required
                />
                <input
                    type="email"
                    placeholder='Email*'
                    className='w-full py-4 px-6 rounded-full'
                    required
                />
                <input
                    type="number"
                    placeholder='Number*'
                    className='w-full py-4 px-6 rounded-full'
                    required
                />
                <input
                    type="text"
                    placeholder='Organization*'
                    className='w-full py-4 px-6 rounded-full'
                    required
                />

                <textarea
                    name=""
                    id=""
                    rows={8}
                    className='w-full py-4 px-6 rounded-xl resize-none col-span-1 lg:col-span-2 hover:bg-[#242941]'
                    placeholder="Describe your application further: stack dimensions, quantity needed, scale-up timeline, etc.*"
                    required
                ></textarea>
                <button type='submit' className='px-4 py-2 w-fit bg-[var(--clr-dark)] hover:bg-[var(--clr-orange)] text-white rounded-full'>Submit</button>

            </div>
        </div>
    )
}

export default ContactForm
