import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    document.title = "About Us - Innovoja Sustainable";
  }, []);

  return (
    <section>
      <div className='about py-24'>
        <div className='about-content lg:w-1/2 lg:ml-[10%] ml-0 p-5 text-white font-light lg:text-lg w-full h-full flex flex-col gap-5 items-start justify-center'>
          <h1 className='lg:text-5xl text-3xl font-bold md:mt-24 lg:mt-12 mt-5'>About Us</h1>
          <p>
            Ionomr develops and markets ion-exchange membrane and polymer solutions for clean technology solutions including fuel cells, hydrogen production, and a range of energy storage applications.
          </p>
          <p>
            After more than five decades of stagnation in materials, our products now enable product developers and integrators to optimize their product performance, improve durability, eliminate toxic components, increase recyclability, and accelerate down the cost curve earlier than anticipated.
          </p>
          <p>
            The Company's R&D and manufacturing facilities are based in Vancouver, Canada – the worldwide hub for fuel cell research and development.
          </p>
        
            <Link className='px-6 py-2 bg-[var(--clr-sky)] rounded-full hover:bg-[var(--clr-orange)]' to={"/about/team"}>Our Team</Link>
           
         
        </div>
      </div>
      <div className='py-12 px-5 text-center'>
        <h1 className='lg:text-5xl text-3xl font-bold'>Our Place in the Value Chain</h1>
        <img src="https://ionomr.com/wp-content/uploads/2018/11/ionomr-value-chain-transparent.png" loading='lazy' alt="" className='mx-auto my-10' />
        <Link to={"/technology"} className='px-6 py-2 bg-white text-[var(--clr-dark)] rounded-full hover:bg-[var(--clr-orange)] hover:text-white mx-auto'>Learn about our tech</Link>
      </div>
    </section>
  );
};

export default About;
