import React from 'react';
import { Link } from 'react-router-dom';
import Heading from './Heading';

const Tech = () => {
  const technologies = [
    {
      title: 'Hydrogen',
      imgSrc: 'https://ionomr.com/wp-content/uploads/2018/10/aem-electrolysis-a-740x416.jpg',
      altText: 'Hydrogen technology',
    },
    {
      title: 'Chemicals',
      imgSrc: 'https://ionomr.com/wp-content/uploads/2018/10/chlor-alkali-process-a-740x416.jpg',
      altText: 'Chemicals technology',
    },
  ];

  return (
    <section className='w-full py-5'>
      <div className='container mx-auto lg:w-2/3 w-full p-5'>
        <div className='flex flex-col gap-5'>
          <Heading text='Our Breakthrough Technology' />
          <p className='mb-10'>
            Ionomr has developed revolutionary ion exchange membrane technology that drastically improves efficiency and performance while minimizing cost and environmental impact:
          </p>
          <ul className='list-disc flex flex-col gap-3'>
            {[
              'Hydrogen generation to fuel the hydrogen economy',
              'Hydrogen fuel cells to power vehicles, ships, buildings and more',
              'Conversion of CO2 to synthetic fuels',
              'Onsite recovery of chemicals for heavy industry – lithium, mining and electronics',
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className='mt-10'>
            Explore{' '}
            <Link to='/applications' className='hover:underline text-[var(--clr-orange)]'>
              our Applications Hub
            </Link>{' '}
            to learn more about specific system use.
          </p>
        </div>

        <div className='text-center flex flex-wrap font-bold lg:text-3xl md:text-2xl text-xl lg:mt-10 mt-5'>
          {technologies.map(({ title, imgSrc, altText }, index) => (
            <div key={index} className='md:w-1/2 w-full md:p-10 p-5'>
              <img
                src={imgSrc}
                alt={altText}
                className='hover:scale-105 cursor-pointer transition-transform duration-500'
              />
              <h2 className='mt-5'>{title}</h2>
            </div>
          ))}
          <Link 
            to='/applications' 
            className='px-6 py-2 bg-[#F4965D] rounded-full leading-relaxed mx-auto text-sm hover:bg-[var(--clr-sky)] hover:text-white'
          >
            View our Applications
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Tech;
