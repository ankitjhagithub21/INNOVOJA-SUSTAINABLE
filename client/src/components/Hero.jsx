import React from 'react'

const Hero = () => {
    return (
        <section className='hero w-full lg:h-screen h-[40vh]    flex items-center justify-center relative'>

            <video
                className='absolute top-0 left-0 w-full h-full  object-cover'
                src="./video.mp4"
                autoPlay
                muted
                loop
            ></video>

           
            <div className='relative flex flex-col gap-1 px-5  md:mt-24 mt-12 lg:mt-0 text-white z-10 text-center hover:scale-105 transition'>
             <h2 className='lg:text-5xl md:text-xl text-sm font-bold'>INNOVOJA SUSTAINABLE SOLUTIONS</h2>
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
