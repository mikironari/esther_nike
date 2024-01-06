import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


SwiperCore.use([Navigation, Pagination]);

/*swiper*/
const SwiperComponent = ( { children } ) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      scrollbar={{ draggable: true }}
      
      naviagation
      // pagination={{ clickable: true }}
      breakpoints={{ 
        768: {
          slidesPerView:6,
        },
      }}>
        {children.map((child, index)=> (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
  )
}

export default SwiperComponent;