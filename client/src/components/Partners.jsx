import Heading from './Heading';
import Slider from './Slider';

const Partners = () => {
  const partners = [
    "https://ionomr.com/wp-content/uploads/2019/11/logo-SDTC-200px.jpg",
    "https://ionomr.com/wp-content/uploads/2019/11/logo-mitacs-2000px.jpg",
    "https://ionomr.com/wp-content/uploads/2019/11/logo-fchea-200px.jpg",
    "https://ionomr.com/wp-content/uploads/2019/11/logo-NRCan-200px.jpg",

  ]
  return (
    <section className='bg-white text-[var(--clr-dark)]'>
      <div className='lg:w-2/3 mx-auto px-5 py-10 text-center'>
        <Heading text={"Partners"} />
        <Slider partners={partners} />
      </div>
    </section>
  )
}

export default Partners
