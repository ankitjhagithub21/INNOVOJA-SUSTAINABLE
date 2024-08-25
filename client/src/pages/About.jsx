import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import useFetchAbout from '../hooks/useFetchAbout';
import NotFound from './NotFound';

const About = () => {
  useEffect(() => {
    document.title = "About Us - Innovoja Sustainable";
    window.scrollTo(0, 0)
  }, []);

  const {about,loading,error} = useFetchAbout()
  

  if (loading) return <p>Loading...</p>;
  if (error) return <NotFound/>;

  return (
    <section>
      <div className='about lg:h-screen h-fit md:py-32 py-12 flex items-center'>
        <div className='about-content lg:w-1/2 lg:ml-[10%] pt-24   ml-0 px-5 text-white font-light lg:text-lg w-full h-full flex flex-col gap-5 items-start justify-center'>
          <Heading text={about.title} />
          <div className='flex flex-col gap-3'>

            {
              about.paragraphs.map((para, index) => {
                return <p key={index}>{para}</p>
              })
            }
          </div>
          <Link className='px-6 py-2 bg-[var(--clr-dark)] rounded-full hover:bg-[var(--clr-orange)]' to={"/about/team"}>Our Team</Link>


        </div>
      </div>
      <div className='py-12 px-5 text-center'>
        <Heading text={"Our Place in the Value Chain"} />
        <img src="https://ionomr.com/wp-content/uploads/2018/11/ionomr-value-chain-transparent.png" loading='lazy' alt="" className='mx-auto my-10' />
        <Link to={"/technology"} className='px-6 py-2 bg-white text-[var(--clr-dark)] rounded-full hover:bg-[var(--clr-orange)] hover:text-white mx-auto'>Learn about our tech</Link>
      </div>
    </section>
  );
};

export default About;
