import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = ({ partners }) => {
  return (
    <Swiper
      modules={[Autoplay]}  
      spaceBetween={50}
      slidesPerView={3}
      breakpoints={{
        640:{
            slidesPerView:2,
            spaceBetween:20
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
            <img src={partner} alt="partner" className='w-full object-contain' />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}

export default Slider;
