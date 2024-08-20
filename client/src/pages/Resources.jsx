import { useEffect } from 'react';
import Heading from '../components/Heading';
import Accordion from '../components/Accordion';



const Resources = () => {
  useEffect(() => {
    document.title = "The Solutions Center - Innovoja Sustainable"
  }, [])
  return (
   <>
    <section className='resources lg:min-h-screen h-fit flex items-center justify-center relative'>
      <div className='overlay'></div>
      <div className='md:mt-32 lg:mt-12 mt-12 py-12 w-full relative flex '>


        <div className='h-full w-full flex flex-wrap items-start justify-center  px-5  z-10'>
          <div className='lg:w-1/4 w-full'>
            <p className='text-[var(--clr-orange)] text-xl font-bold' >Resources</p>
            <Heading text={"The"} />
            <Heading text={"Solution"} />
            <Heading text={"Center"} />
          </div>
          <div className='lg:w-3/4 w-full flex flex-col gap-5'>
            <p className='text-[var(--clr-orange)] text-xl font-bold' >Reference Design Tutorial
            </p>
            <Heading text={"Introducing Ionomr Innovations' AEM Reference Design Kit"} />
            <p>AEM design is complex, time consuming, and redesign work is expensive.
              The following video gives step by step guidelines on how to activate our revolutionary membrane, assemble your test cell, and get to test insights accurately
            </p>
            <p>Watch the Tutorial video to learn more !</p>
            <video src="https://ionomr.com/wp-content/uploads/2024/06/tp5-cell-assembly-final-255mb.mp4?_=1" controls width={500}></video>
          </div>
        </div>
      </div>
     
    </section>
    <Accordion/>
   </>
  );
};

export default Resources;
