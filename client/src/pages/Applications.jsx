import React, { useEffect, useState } from 'react';
import applications from '../data/applications';

const Applications = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const buttons = ["All", "Chemicals", "Hydrogen"];

  useEffect(() => {
    document.title = "Applications - Innovoja Sustainable";
  }, []);

  const filteredApplications = selectedCategory === "All"
    ? applications
    : applications.filter(app => app.category === selectedCategory);

  return (
    <section className='lg:px-5 px-0 pt-32'>
      <h1 className='lg:text-5xl text-3xl font-bold text-center mb-12 md:mt-10 lg:mt-0 mt-0'>Applications</h1>
      
      <div className='flex flex-wrap items-center justify-center md:gap-5 gap-2 text-lg'>
        {buttons.map((button, index) => (
          <button 
            key={index}
            className={`px-6 py-2 text-sm rounded-full ${
              selectedCategory === button ? 'bg-[var(--clr-orange)] text-white' : 'bg-gray-200 text-black'
            }`}
            onClick={() => setSelectedCategory(button)}
          >
            {button}
          </button>
        ))}
      </div>

      <div className="container mx-auto flex flex-wrap">
        {filteredApplications.map((box) => (
          <div key={box.id} className='p-5 lg:w-1/3 md:w-1/2 w-full'>
            <div className='flex flex-col cursor-pointer'>
              <img src={box.image} alt="" className='hover:opacity-80' />
              <div className='p-5 bg-[var(--clr-orange)]'>
                <h1 className='text-xl font-bold hover:text-[var(--clr-dark)]'>{box.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Applications;
