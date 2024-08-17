import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    document.title = "About Us - Innovoja Sustainable";
    window.scrollTo(0,0)
  }, []);

  return (
    <section>
      <div className='about py-24'>
        <div className='about-content lg:w-1/2 lg:ml-[15%] ml-0 p-5 text-white font-light lg:text-lg w-full h-full flex flex-col gap-5 items-start justify-center'>
          <h1 className='lg:text-5xl text-3xl font-bold mt-10'>About Us</h1>
          <p>
            Ionomr develops and markets ion-exchange membrane and polymer solutions for clean technology solutions including fuel cells, hydrogen production, and a range of energy storage applications.
          </p>
          <p>
            After more than five decades of stagnation in materials, our products now enable product developers and integrators to optimize their product performance, improve durability, eliminate toxic components, increase recyclability, and accelerate down the cost curve earlier than anticipated.
          </p>
          <p>
            The Company's R&D and manufacturing facilities are based in Vancouver, Canada – the worldwide hub for fuel cell research and development.
          </p>
          <div className='flex items-center gap-5 flex-wrap'>
            <Link className='px-6 py-2 bg-[#7DA2C7] rounded-full hover:bg-[#F4965D]' to={"/about/team"}>Our Team</Link>
            <button className='px-6 py-2 bg-[#7DA2C7] rounded-full hover:bg-[#F4965D]'>Board & Advisors</button>
          </div>
        </div>
      </div>
      <div className='py-12 px-5 text-center'>
        <h1 className='lg:text-5xl text-3xl font-bold '>Our Place in the Value Chain</h1>
        <img src="https://ionomr.com/wp-content/uploads/2018/11/ionomr-value-chain-transparent.png" loading='lazy' alt="" className='mx-auto my-10' />
        <Link to={"/technology"} className='px-6 py-2 bg-white text-[#242941] rounded-full hover:bg-[#F4965D] hover:text-white mx-auto'>Learn about our tech</Link>
      </div>
    </section>
  );
};

export default About;
