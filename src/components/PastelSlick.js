/*react slick*/
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import PastelData from "../data/PastelData";



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "0"}}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "0"}}
      onClick={onClick}
    />
  );
}

function PastelSlick() {
  let [pastelList] = useState(PastelData);
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <div className="slider-container mb-5">
      
      <Slider {...settings}>
        {
          pastelList.map((item) => (
            <div className='main1Swiper mb-3 mt-2'
            key={item.id}>
              <div>
                <img className="mb-3"
                src={item.img}/>
              </div>
              <p className="bold">{item.title}</p>
              <p>{item.content}</p>
              <p className="bold">{item.price}</p>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default PastelSlick;