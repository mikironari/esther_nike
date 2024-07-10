import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
// import { Pagination } from 'swiper/modules';


SwiperCore.use([Navigation, Pagination]);

/*swiper*/
const SwiperComponent = ( { children } ) => {
  return (
    <Swiper
      spaceBetween={50}
      scrollbar={{ draggable: true }}
      // centeredSlides={false}
      naviagation
      pagination={{ clickable: true }}
      // modules={[Pagination]}
      //   className="mySwiper"
      breakpoints={{ 
        280: {
          slidesPerView: 1
        },
        300: {
          slidesPerView: 2
        },
        360: {
          slidesPerView: 2
        },
        530: {
          slidesPerView: 3
        },
        900: {
          slidesPerView: 4
        },
        1200: {
          slidesPerView: 5
        },
        
      }}>
        {children.map((child, index)=> ( //좌우측에 나타나는 navigation은 children 매개변수로 받은 slice들을 하나씩 순서대로 나오게 작성한 것...
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
  )
}

export default SwiperComponent;