/*react slick*/
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import MainSlick1 from "../data/PastelData";

function Slick1() {
  let [slick1List] = useState(MainSlick1);
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      {/* css import 하면 적용안되서 cdn으로 추가하니까 되네... */}
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
      <Slider {...settings}>
        <div>
          {
            slick1List.map((a, i)=>{
              return (
                <SlickCard key={(a, i)}
                slick1List={slick1List[i]} i={i}></SlickCard>
              )
            })
          }
        </div>
      </Slider>
    </div>
  );
}

function SlickCard(props) {
  return (
    <div className=''>
      <img src={ props.slick1List.img } />
      <p className="bold mt-3">{ props.slick1List.title }</p>
      <p className="left mt-4 mb-4">{ props.slick1List.content }</p>
      <p className="left mt-4 mb-4">{ props.slick1List.price }</p>
    </div>
  )
}

export default Slick1;