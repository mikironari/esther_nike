import '../css/Product.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import MenSwiper from "../data/MenSwiper";
import WomenSwiper from "../data/WomenSwiper";
import KidsSwiper from '../data/KidsSwiper';
import SwiperComponent from '../components/Swiper';
// import Carousel from '../components/Carousel';


function Product() {

  let[tab,setTab] = useState(0);
  

  return (
    <>
    <div className="productPage">
      
      <div className='product1'>
        <h3 className="mb-4">구매하기</h3>
        
        <Nav 
          variant="underline"
          defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link  
              eventKey="link-0"
              onClick={() => {setTab(0)}}
              className='mentab' >남성</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={()=>{setTab(1)}} >여성</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={()=>{setTab(2)}} >키즈</Nav.Link>
          </Nav.Item>
        </Nav> 

        <TabContent tab={tab}/>

      </div>

      
    </div>
    </>  
  )

}

function TabContent(props){

  let[menList] = useState(MenSwiper);
  let[womenList] = useState(WomenSwiper);
  let[kidsList] = useState(KidsSwiper);

  if(props.tab === 0){
    return <div className='underline'>
      <div className="productTab1">
        <div className='mt-4 mb-4'>
          <p className='bold'>나이키 앱 베스트 컬렉션</p>
          <p className='grey'>나이키 앱과 함께 시작하는 새해</p>
          <p className='grey'>특별한 선물의 주인공이 되어 보세요.</p>
        </div>
        <SwiperComponent>
          {
            menList.map((a, i)=>{
              return (
                <MenCard menList={menList[i]} i={i}></MenCard>
              )
            })  
          }
        </SwiperComponent>
      </div>  

      <div className='product2'>
        <div className='spabet menBox mb-2'>
          <h4>신제품</h4>
          <div>
            <img src={process.env.PUBLIC_URL + '/menbox1.png'} width="150px"/>
          </div>
        </div>

        <div className='spabet menBox mb-2'>
          <h4>신발</h4>
          <div>
            <img src={process.env.PUBLIC_URL + '/menbox2.png'} width="150px"/>
          </div>
        </div>

        <div className='spabet menBox mb-2'>
          <h4>의류 & 용품</h4>
          <div>
            <img src={process.env.PUBLIC_URL + '/menbox3.png'} width="150px"/>
          </div>
        </div>

        <div className='spabet menBox mb-2'>
          <h4>Sale : Up to 50%</h4>
          <div>
            <img src={process.env.PUBLIC_URL + '/menbox4.png'} width="150px"/>
          </div>
        </div>
      </div>
    </div>
  }else if(props.tab === 1){
    return <div className='underline'>
      <div>
        <div className='mt-4 mb-4'>
          <p className='bold'>나이키 앱 베스트 컬렉션</p>
          <p className='grey'>나이키 앱과 함께 시작하는 새해</p>
          <p className='grey'>특별한 선물의 주인공이 되어 보세요.</p>
        </div>
        <SwiperComponent>
          {
            womenList.map((a, i)=>{
              return (
                <WomenCard womenList={womenList[i]} i={i}></WomenCard>
              )
            })  
          }
        </SwiperComponent>
      </div>

      <div className='product2'>
        <div className='spabet womenBox mb-2'>
          <h4>신제품</h4>
          <div>
            <img src={process.env.PUBLIC_URL + '/womenbox1.png'} width="150px"/>
          </div>
        </div>

        <div className='spabet womenBox mb-2'>
          <h4>신발</h4>
          <div>
            <img src={process.env.PUBLIC_URL + '/womenbox2.png'} width="150px"/>
          </div>
        </div>

        <div className='spabet womenBox mb-2'>
          <h4>의류 & 용품</h4>
          <div>
            <img src={process.env.PUBLIC_URL + '/womenbox3.png'} width="150px"/>
          </div>
        </div>

        <div className='spabet womenBox mb-2'>
          <h4>Sale : Up to 50%</h4>
          <div>
            <img src={process.env.PUBLIC_URL + '/womenbox4.png'} width="150px"/>
          </div>
        </div>
      </div>
    </div>
  }else if(props.tab === 2){
    return <div className='underline'>
      <div>
        <div className='mt-4 mb-4'>
          <p className='bold'>나이키 앱 베스트 컬렉션</p>
          <p className='grey'>나이키 앱과 함께 시작하는 새해</p>
          <p className='grey'>특별한 선물의 주인공이 되어 보세요.</p>
        </div>
        <SwiperComponent>
          {
            kidsList.map((a, i)=>{
              return (
                <KidsCard kidsList={kidsList[i]} i={i}></KidsCard>
              )
            })  
          }
        </SwiperComponent>
      </div>

      <div className='product2'>
        <div className='spabet kidBox mb-2'>
          <h4>신제품</h4>
          <div>
            <img src={process.env.PUBLIC_URL + '/kidbox1.png'} width="150px"/>
          </div>
        </div>

        <div className='spabet kidBox mb-2'>
          <h4>신발</h4>
          <div>
            <img src={process.env.PUBLIC_URL + '/kidbox2.png'} width="150px"/>
          </div>
        </div>

        <div className='spabet kidBox mb-2'>
          <h4>의류 & 용품</h4>
          <div>
            <img src={process.env.PUBLIC_URL + '/kidbox3.png'} width="150px"/>
          </div>
        </div>

        <div className='spabet kidBox mb-2'>
          <h4>Sale : Up to 50%</h4>
          <div>
            <img src={process.env.PUBLIC_URL + '/kidbox4.png'} width="150px"/>
          </div>
        </div>
      </div>
    </div>
  }
}

function MenCard(props) {
  return (
    <div className="menCard">
      <div>
        <img src={ props.menList.img } />
      </div>
      <p className="mt-3 mb-5">{ props.menList.name }</p>
    </div>
  )
}

function WomenCard(props) {
  return (
    <div className="menCard">
      <div>
        <img src={ props.womenList.img } />
      </div>
      <p className="mt-3 mb-5">{ props.womenList.name }</p>
    </div>
  )
}

function KidsCard(props) {
  return (
    <div className="menCard">
      <div>
        <img src={ props.kidsList.img } />
      </div>
      <p className="mt-3 mb-5">{ props.kidsList.name }</p>
    </div>
  )
}



export default Product;