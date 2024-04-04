import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


SwiperCore.use([Navigation, Pagination]);

/*swiper*/
const MainSwiper = ( { children } ) => {
  return (
    <Swiper
      spaceBetween={260}
      slidesPerView={2}
      scrollbar={{ draggable: true }}
      // naviagation
      // pagination={{ clickable: true }}
      // className={`
      // w-[20rem] h-[10rem] md:w-[30rem] md:h-[15rem] lg:w-[61rem] my-6 max-w-[500px] md:max-w-[976px] max-h-[15rem] 
      //  `}
      breakpoints={{
        700: {
          slidesPerView:3,
          spaceBetween: 260,
        }, 
        1000: {
          slidesPerView:4,
          spaceBetween: 260,
        }, 
        1200: {
          slidesPerView:6,
          spaceBetween: 260,
        },
      }}
      >
        {children.map((child, index)=> (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
  )
}

export default MainSwiper;