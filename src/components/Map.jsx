import React from 'react'

const Map = () => {
    return (
        <div>
            <h1 className='text-3xl font-bld text-center my-10 font-bold'>Research and Development</h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10303.037630493543!2d-77.621662!3d43.096584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80504aeba868a335%3A0x85794f5547c43c62!2sIonomr%20Innovations%2C%20Inc.!5e1!3m2!1sen!2sin!4v1723901801307!5m2!1sen!2sin"
                className='w-full h-96'
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />

        </div>
    )
}

export default Map
