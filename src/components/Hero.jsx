import React from 'react'

const Hero = () => {
    return (
        <section className='md:h-screen h-fit w-full flex items-center justify-center relative'>

            <video
                className='absolute top-0 left-0 w-full h-full object-cover'
                src="./video.mp4"
                autoPlay
                muted
                loop
            ></video>

            {/* Overlay */}
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30'></div>

            <div className='relative flex flex-col gap-3 text-white z-10 text-center hover:scale-105 transition'>
                <h1 className='lg:text-6xl md:text-3xl text-xl lowercase font-bold '>
                    INNOVOJA SUSTAINABLE SOLUTIONS
                </h1>
                <p className='lg:text-3xl text-sm'>
                    enables the global renewable transition with
                </p>
                <p className='lg:text-3xl text-sm'>
                    advanced materials to unlock hydrogen & carbon-neutral technologies
                </p>
            </div>

        </section>
    )
}

export default Hero
