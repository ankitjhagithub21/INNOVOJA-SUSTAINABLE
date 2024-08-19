import React, { useEffect } from 'react';
import Heading from '../components/Heading';

const MoreInfo = () => {
  useEffect(() => {
    document.title = "Get More Info - Innovoja Sustainable";
  }, []);

  return (
    <section className='py-24'>
      <div className='lg:w-2/3 mx-auto py-12 px-5 text-center'>
        <Heading text={"Get More Info"}/>
        <p className='mt-4'>
          Please complete the following form so we can provide you with the most relevant information for your application.
          Note: we require company email contact. Personal email addresses may not be accepted.
        </p>
      </div>

      <div className='w-full bg-[#EDCB91] px-5'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 py-10 lg:w-2/3 w-full mx-auto'>
          <input 
            type="text" 
            placeholder='First name*' 
            className='w-full py-4 px-6 rounded-full' 
            required 
          />
          <input 
            type="text" 
            placeholder='Last name*' 
            className='w-full py-4 px-6 rounded-full' 
            required 
          />
          <input 
            type="email" 
            placeholder='Company Email*' 
            className='w-full py-4 px-6 rounded-full' 
            required 
          />
          <input 
            type="number"  
            placeholder='Phone*' 
            className='w-full py-4 px-6 rounded-full' 
            required 
          />
          <input 
            type="text" 
            placeholder='Organization*' 
            className='w-full py-4 px-6 rounded-full' 
            required 
          />
          <input 
            type="text" 
            placeholder='Position*' 
            className='w-full py-4 px-6 rounded-full' 
            required 
          />
          <input 
            type="text" 
            placeholder='Address*' 
            className='w-full py-4 px-6 rounded-full' 
            required 
          />
          <input 
            type="text" 
            placeholder='Which Product*' 
            className='w-full py-4 px-6 rounded-full' 
            required 
          />
          <textarea 
            name="" 
            id="" 
            rows={8} 
            className='w-full py-4 px-6 rounded-xl resize-none col-span-1 lg:col-span-2 hover:bg-[#242941]' 
            placeholder="Describe your application further: stack dimensions, quantity needed, scale-up timeline, etc.*" 
            required
          ></textarea>
          <button type='submit' className='px-4 py-2 w-fit bg-[var(--clr-dark)] hover:bg-[var(--clr-orange)] text-white rounded-full'>Submit</button>
        </div>
      </div>
    </section>
  );
}

export default MoreInfo;
