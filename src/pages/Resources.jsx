
import { useEffect } from 'react';
import AccordionItem from '../components/AccordionItem';
import Overlay from '../components/Overlay';



const Resources = () => {
  useEffect(()=>{
    document.title ="The Solutions Center - Innovoja Sustainable"
  },[])
  return (
    <section>
      <div className='h-fit py-12  w-full relative flex'>
        <img src="https://ionomr.com/wp-content/uploads/2019/03/RollCut.jpg" alt="" className='absolute top-0 left-0 w-full h-full object-cover' />
        <Overlay />
        <div className='h-fit w-full flex flex-wrap items-start justify-center  mt-20  px-5  z-10'>
          <div className='lg:w-1/4 w-full'>
            <p className='text-[var(--clr-orange)] text-xl font-bold' >Resources</p>
            <h1 className='lg:text-5xl text-3xl font-bold'>The <br /> Solutions <br /> Center</h1>
          </div>
          <div className='lg:w-3/4 w-full flex flex-col gap-5'>
          <p className='text-[var(--clr-orange)] text-xl font-bold' >Reference Design Tutorial
          </p>
            <h1 className='lg:text-5xl text-3xl font-bold'>Introducing Ionomr Innovations' AEM Reference Design Kit</h1>
          <p>AEM design is complex, time consuming, and redesign work is expensive.
            The following video gives step by step guidelines on how to activate our revolutionary membrane, assemble your test cell, and get to test insights accurately
            </p>
            <p>Watch the Tutorial video to learn more !</p>
            <video src="https://ionomr.com/wp-content/uploads/2024/06/tp5-cell-assembly-final-255mb.mp4?_=1" controls width={500}></video>
            </div>
        </div>
      </div>
      <div className="lg:w-2/3 w-full mx-auto my-24 px-5">
        <AccordionItem
          title="Aemion+® AF3 Membrane Pretreatment & Handling"
          content="Membrane handling, storage, and pre-treatment instructions for Aemion+® AF3 Membranes."
        />
        <AccordionItem
          title="Pemion®: Membrane Handling & Storage"
          content="Membrane handling, storage, and pre-treatment instructions for Pemion® Membranes."
        />
        <AccordionItem
          title="Aemion+® AP3: Ionomer Dispersion & Ink Formulation"
          content="Ionomer handling, mixing, and formulation instructions for Aemion+® AP3."
        />
        <AccordionItem
          title="Aemion+® AP3: Ionomer Dispersion & Ink Formulation"
          content="Ionomer handling, mixing, and formulation instructions for Aemion+® AP3."
        />
        <AccordionItem
          title="Aemion+® AP3: Ionomer Dispersion & Ink Formulation"
          content="Ionomer handling, mixing, and formulation instructions for Aemion+® AP3."
        />
        <AccordionItem
          title="Aemion+® AP3: Ionomer Dispersion & Ink Formulation"
          content="Ionomer handling, mixing, and formulation instructions for Aemion+® AP3."
        />
        {/* Add more AccordionItem components as needed */}
      </div>
    </section>
  );
};

export default Resources;
