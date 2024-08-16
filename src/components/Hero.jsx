import React from 'react'

const Hero = () => {
    return (
        <section className='md:h-screen h-fit w-full'>
            <div className='overlay flex items-center h-fit md:h-screen py-24 mt-24 md:mt-0 justify-center relative p-5'>
            <video
                className='absolute top-0 left-0 w-full h-full object-cover'
                src="./video.mp4"
                autoPlay
                muted
                loop
            ></video>

            <div className='relative flex flex-col gap-3 text-white z-10 text-center'>
                <h1 className='lg:text-6xl md:text-3xl text-xl lowercase font-bold'>
                    INNOVOJA SUSTAINABLE SOLUTIONS
                </h1>
                <p className='lg:text-3xl text-sm'>
                    enables the global renewable transition with
                </p>
                <p className='lg:text-3xl text-sm'>
                    advanced materials to unlock hydrogen & carbon-neutral technologies
                </p>
            </div>
            </div>
           

        </section>

    )
}

export default Hero
