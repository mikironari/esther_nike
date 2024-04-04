/*react slick*/
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#e5e5e5" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#e5e5e5" }}
      onClick={onClick}
    />
  );
}

function PastelSlick() {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
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
          infinite: false,
          dots: true,
          speed: 500,
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
    <div className="slider-container mb-5">
      
      <Slider {...settings}>
        <div  className='main1Swiper'>
            <div>
              <img src={ process.env.PUBLIC_URL + '/pastel1.png' }/>
            </div>
            <div>
              <p className='bold'>나이키 ACG'</p>
              <p className="grey">남성 드라이 핏 티셔츠</p>
              <div className='flex'>
                <p>59,000</p>
                <p> 원</p>
              </div>
            </div>
          </div>

          <div  className='main1Swiper'>
            <div>
              <img src={ process.env.PUBLIC_URL + '/pastel2.png' }/>
            </div>
            <div>
              <p className='bold'>나이키 스포츠웨어</p>
              <p className="grey">남성용 오버사이즈 티셔츠</p>
              <div className='flex'>
                <p>65,000</p>
                <p> 원</p>
              </div>
            </div>
          </div>

          <div  className='main1Swiper'>
            <div>
              <img src={ process.env.PUBLIC_URL + '/pastel3.png' }/>
            </div>
            <div>
              <p className='bold'>나이키 스포츠웨어 프리미엄 에센셜</p>
              <p className="grey">남성 티셔츠</p>
              <div className='flex'>
                <p>55,000</p>
                <p> 원</p>
              </div>
            </div>
          </div>

          <div  className='main1Swiper'>
            <div>
              <img src={ process.env.PUBLIC_URL + '/pastel4.png' }/>
            </div>
            <div>
              <p className='bold'>나이키 솔로 스우시</p>
              <p  className="grey">남성 플리스 크루</p>
              <div className='flex'>
                <p>119,000</p>
                <p> 원</p>
              </div>
            </div>
          </div>

          <div  className='main1Swiper'>
            <div>
              <img src={ process.env.PUBLIC_URL + '/pastel5.png' }/>
            </div>
            <div>
              <p className='bold'>나이키 스포츠웨어 에센셜</p>
              <p  className="grey">여성 박시 티셔츠</p>
              <div className='flex'>
                <p>49,000</p>
                <p> 원</p>
              </div>
            </div>
          </div>

          <div  className='main1Swiper'>
            <div>
              <img src={ process.env.PUBLIC_URL + '/pastel6.png' }/>
            </div>
            <div>
              <p className='bold'>나이키 스포츠웨어 에센셜 윈드러너</p>
              <p  className="grey">여성 우븐 재킷</p>
              <div className='flex'>
                <p>135,000</p>
                <p> 원</p>
              </div>
            </div>
          </div>

          <div  className='main1Swiper'>
            <div>
              <img src={ process.env.PUBLIC_URL + '/pastel7.png' }/>
            </div>
            <div>
              <p className='bold'>나이키 에어</p>
              <p  className="grey">여성 오버사이즈 우븐 봄버 재킷</p>
              <div className='flex'>
                <p>159,000</p>
                <p> 원</p>
              </div>
            </div>
          </div>
      </Slider>
    </div>
  );
}

export default PastelSlick;