import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = ({ partners }) => {
  return (
    <Swiper
     className='my-10'
      modules={[Autoplay]}  
      spaceBetween={50}
      breakpoints={{
      
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      speed={1000}
      autoplay={{ 
        delay: 1500,  
        
      }}
      loop={true}  
      grabCursor={true} 
      onSwiper={(swiper) => {
        swiper.el.addEventListener('mouseenter', () => {
          swiper.autoplay.stop();
        });

        swiper.el.addEventListener('mouseleave', () => {
          swiper.autoplay.start();
        });
      }}
    >
      {
        partners.map((partner, index) => (
          <SwiperSlide key={index}>
            <img src={partner} alt="partner" className='w-full h-auto object-contain' />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}

export default Slider;
