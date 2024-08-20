import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../components/Heading';

const About = () => {
  useEffect(() => {
    document.title = "About Us - Innovoja Sustainable";
    window.scrollTo(0, 0)
  }, []);

  const data = {
    title: "About Us",
    paragraphs: [
      "  Ionomr develops and markets ion-exchange membrane and polymer solutions for clean technology solutions including fuel cells, hydrogen production, and a range of energy storage applications.",
      " After more than five decades of stagnation in materials, our products now enable product developers and integrators to optimize their product performance, improve durability, eliminate toxic components, increase recyclability, and accelerate down the cost curve earlier than anticipated.",
      " The Company's R&D and manufacturing facilities are based in Vancouver, Canada – the worldwide hub for fuel cell research and development.",
    ]
  }



  return (
    <section>
      <div className='about lg:h-screen h-fit py-32 flex items-center'>
        <div className='about-content lg:w-1/2 lg:ml-[10%] pt-24   ml-0 p-5 text-white font-light lg:text-lg w-full h-full flex flex-col gap-5 items-start justify-center'>
          <Heading text={data.title} />
          <div className='flex flex-col gap-3'>

            {
              data.paragraphs.map((para, index) => {
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
