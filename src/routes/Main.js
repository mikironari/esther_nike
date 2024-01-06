import '../css/Main.css';
import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Button, Form, Offcanvas, NavbarBrand } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './routes/Header.js';
import data from '../data/data';
import Swiper from 'swiper';
import MainSwiper from '../components/MainSwiper';
// import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';


function Main() {

  // let navigate = useNavigate();
  let [mainList] = useState(data);

  return (
    <div className="main">

      <div className='banner center'>
        <p className='center bold'>웰컴 쿠폰: 앱 첫 구매 15% 할인 혜택</p>
        <div className='flex'>
          <h6>나이키 멤버로 가입해서 더 나은 쇼핑을 경험해보세요.</h6>
          <a className='bold'>가입하기</a>
        </div>
      </div>

      <div className="main1">
        <div>
          {
            mainList.map((a, i)=>{
              return (
                <Card key={(a, i)} mainList={mainList[i]} i={i}></Card>
                // Warning: Each child in a list should have a unique "key" prop. react에서 map메서드를 이용해 리스트를 순차적으로 나열할 때 배열의 각 값마다 독립적인 key값을 부여하지 않아서 나는 에러라고 한다. card 태그 안에 key={(a, i)} 추가해주니 에러 사라짐..
                )
              })  
          }
        </div>
      </div>

      <div className='main2'>
        <h3 className='mb-4 bold'>겨울 아우터 추천 Apparel</h3>
        <MainSwiper>
          <div  className='main1Swiper'>
            <div>
              <img src={ process.env.PUBLIC_URL + '/mainswiper1-1.png' }/>
            </div>
            <div>
              <p className='bold'>나이키 써마 핏 '루나 레이크'</p>
              <div className='flex'>
                <p>324,000</p>
                <p> 원</p>
              </div>
            </div>
          </div>

          <div  className='main1Swiper'>
            <div>
              <img src={ process.env.PUBLIC_URL + '/mainswiper1-2.png' }/>
            </div>
            <div>
              <p className='bold'>나이키 스톰 핏 윈드러너</p>
              <div className='flex'>
                <p>223,200</p>
                <p> 원</p>
              </div>
            </div>
          </div>

          <div  className='main1Swiper'>
            <div>
              <img src={ process.env.PUBLIC_URL + '/mainswiper1-3.png' }/>
            </div>
            <div>
              <p className='bold'>나이키 써마 핏 '로프 드 도프'</p>
              <div className='flex'>
                <p>199,200</p>
                <p> 원</p>
              </div>
            </div>
          </div>

          <div  className='main1Swiper'>
            <div>
              <img src={ process.env.PUBLIC_URL + '/mainswiper1-4.png' }/>
            </div>
            <div>
              <p className='bold'>나이키 스포츠웨어 스우시</p>
              <div className='flex'>
                <p>103,200</p>
                <p> 원</p>
              </div>
            </div>
          </div>
        </MainSwiper>
      </div>

      <div className='main3'>
        <h3 className='mb-4 bold'>Always Iconic</h3>
        <MainSwiper>
          <div  className='main1Swiper'>
            <div>
              <img src={ process.env.PUBLIC_URL + '/mainswiper2-1.png' }/>
            </div>
            <p className='bold'>에어 포스 1</p>
          </div>

          <div  className='main1Swiper'>
            <div>
              <img src={ process.env.PUBLIC_URL + '/mainswiper2-2.png' }/>
            </div>
            <p className='bold'>덩크</p>
          </div>

          <div  className='main1Swiper'>
            <div>
              <img src={ process.env.PUBLIC_URL + '/mainswiper2-3.png' }/>
            </div>
            <p className='bold'>에어 조던 1</p>
          </div>

          <div  className='main1Swiper'>
            <div>
              <img src={ process.env.PUBLIC_URL + '/mainswiper2-4.png' }/>
            </div>
            <p className='bold'>에어맥스</p>
          </div>

          <div  className='main1Swiper'>
            <div>
              <img src={ process.env.PUBLIC_URL + '/mainswiper2-5.png' }/>
            </div>
            <p className='bold'>메트콘</p>
          </div>
        </MainSwiper>
      </div>

    </div>
  );
}

function Card(props) {
  return (
    <div className='lists'>
      <img src={ props.mainList.img } />
      <h1 className="bold mt-3">{ props.mainList.title }</h1>
      <p className="left mt-4 mb-4">{ props.mainList.content }</p>
      <div className="left">
        <button className="blackbtn">구매하기</button>
      </div>
    </div>
  )
}



      {/* <div className='lowerNav'>
        <Nav className="navnav">
              <Navbar.Brand onClick={()=>{ navigate('/') }} className='lowNavBrand'>
                <div className='homeIcon' style={{ backgroundImage : 'url('+ home +')' }}>
                </div>
              </Navbar.Brand>
              <Nav.Link href="#search" onClick={()=>{ navigate('/search') }}>
                <img src={process.env.PUBLIC_URL + '/search.png'} 
                  width="25px"/>
              </Nav.Link>
              <Nav.Link href="#wishlist" onClick={()=>{ navigate('/wishlist') }}>
                <img src={process.env.PUBLIC_URL + '/wishlist.png'} width="25px"/>
              </Nav.Link>
              <Nav.Link href="#shop" onClick={()=>{ navigate('/cart') }}>
                <img src={process.env.PUBLIC_URL + '/shopping.png'} width="25px"/>
              </Nav.Link>
              <Nav.Link href="#myaccount"  onClick={()=>{ navigate('/myaccount') }}>
                <img src={process.env.PUBLIC_URL + './myacc.png'} width="25px"/>
              </Nav.Link>
        </Nav>
      </div> */}

export default Main;
