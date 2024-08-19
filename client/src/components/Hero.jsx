import React from 'react'
import Heading from './Heading'

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
           

            <div className='relative flex flex-col gap-3 py-24 md:mt-0 mt-12 text-white z-10 text-center hover:scale-105 transition'>
             <Heading text={"INNOVOJA SUSTAINABLE SOLUTIONS"}/>
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
