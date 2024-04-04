import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import ShopData from "../data/ShopData";

export default function ShopSlick() {
  let [shopList] = useState(ShopData);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
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
          shopList.map((item) => (
            <div className='main1Swiper mb-3 mt-2'
              key={item.id}>
                <div>
                  <img className="mb-3"
                  src={item.img}/>
                </div>
                <p className="bold">{item.title}</p>
                <p className="verpc">{item.content}</p>
                <button className="simplebtn mb-3">구매하기</button>
              </div>
          ))
        }
      
      </Slider>
    </div>
  );
}