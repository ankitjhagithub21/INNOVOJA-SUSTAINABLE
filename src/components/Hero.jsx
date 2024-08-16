import React from 'react'

const Hero = () => {
    return (
        <section className='min-h-screen w-full relative flex items-center justify-center'>

            <video
                className='absolute top-0 left-0 w-full h-full object-cover'
                src="./video.mp4"
                autoPlay
                muted
                loop
            ></video>

            <div className='relative flex flex-col gap-3 text-white z-10 text-center'>
                <h1 className='lg:text-6xl text-4xl lowercase font-bold'>
                    INNOVOJA SUSTAINABLE SOLUTIONS
                </h1>
                <p className='text-3xl'>
                    enables the global renewable transition with
                </p>
                <p className='text-3xl'>
                    advanced materials to unlock hydrogen & carbon-neutral technologies
                </p>
            </div>

        </section>

    )
}

export default Hero
