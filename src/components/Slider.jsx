import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = ({ partners }) => {
  return (
    <Swiper
      modules={[Autoplay]}  
      spaceBetween={50}
      slidesPerView={3}
      speed={1000}
      autoplay={{ 
        delay: 1500,  
        disableOnInteraction: true, 
      }}
      loop={true}  
      grabCursor={true} 
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
