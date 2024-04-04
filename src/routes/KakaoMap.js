import React from "react";
import '../css/KakaoMap.css';
import { useState } from "react";
import { Nav } from "react-bootstrap";
// import TabContent from "react-bootstrap";
import Map from "../components/map/map";

function KakaoMap() {
  
  let[tab2,setTab2] = useState(0);

  return (
    <div className="kakaomap">
      <div>
        <h4 className="bold">나이키 매장 찾기</h4>
        
        <div className="flex mt-5 mb-5">
          <div>
            <img src={process.env.PUBLIC_URL + '/search.png'} width="20px"/>
          </div>
          <input placeholder="위치 검색"></input>
        </div>

        <div className="vermo">
          <Nav 
          variant="underline"
          defaultActiveKey="link-0">
            <Nav.Item>
              <Nav.Link  
              eventKey="link-0"
              onClick={() => {setTab2(0)}}
              className='mentab' >Map</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" onClick={()=>{setTab2(1)}} >List</Nav.Link>
            </Nav.Item>
          </Nav> 
        </div>

        <div className="maplist verpc">
          <div>
            <p className="bold">나이키 서울</p>
            <p className="silver">명동길 14 눈스퀘어 1층</p>
            <p className="silver">중구, 서울특별시, 04536, KR</p>
            <div className="flex">
              <p>영업 중</p>
              <span className="bold">•</span>
              <p className="silver">영업 종료 시간: 오후 10:00</p>
            </div>
          </div>

          <div>
            <p className="bold">나이키 신세계 명동</p>
            <p className="silver">소공로 63 신세계백화점 4층</p>
            <p className="silver">중구, 서울특별시, 04530, KR</p>
            <div className="flex">
              <p>영업 중</p>
              <span className="bold">•</span>
              <p className="silver">영업 종료 시간: 오후 8:00</p>
            </div>
          </div>

          <div>
            <p className="bold">나이키 롯데 명동</p>
            <p className="silver">남대문로 73 롯데백화점 AVENUEL 6층</p>
            <p className="silver">중구, 서울특별시, 04533, KR</p>
            <div className="flex">
              <p>영업 중</p>
              <span className="bold">•</span>
              <p className="silver">영업 종료 시간: 오후 8:00</p>
            </div>
          </div>

          <div>
            <p className="bold">나이키 현대 동대문</p>
            <p className="silver">장충단로13길 20 현대시티아울렛 7층</p>
            <p className="silver">중구, 서울특별시, 04563, KR</p>
            <div className="flex">
              <p>영업 중</p>
              <span className="bold">•</span>
              <p className="silver">영업 종료 시간: 오후 8:00</p>
            </div>
          </div>

        </div>
      </div>

      <TabContent2 tab2={tab2} className="tabCon2 vermo"/>

    </div>
  );
}

function TabContent2(props){
  if(props.tab2 === 0){
    return <div className="mapDiv">
        <Map className="map"/>
      </div>
  }else if(props.tab2 === 1) {
    return <div className="maplist">
      <div>
        <p className="bold">나이키 서울</p>
        <p className="silver">명동길 14 눈스퀘어 1층</p>
        <p className="silver">중구, 서울특별시, 04536, KR</p>
        <div className="flex">
          <p>영업 중</p>
          <span className="bold">•</span>
          <p className="silver">영업 종료 시간: 오후 10:00</p>
        </div>
      </div>

      <div>
        <p className="bold">나이키 신세계 명동</p>
        <p className="silver">소공로 63 신세계백화점 4층</p>
        <p className="silver">중구, 서울특별시, 04530, KR</p>
        <div className="flex">
          <p>영업 중</p>
          <span className="bold">•</span>
          <p className="silver">영업 종료 시간: 오후 8:00</p>
        </div>
      </div>

      <div>
        <p className="bold">나이키 롯데 명동</p>
        <p className="silver">남대문로 73 롯데백화점 AVENUEL 6층</p>
        <p className="silver">중구, 서울특별시, 04533, KR</p>
        <div className="flex">
          <p className="bold">영업 중</p>
          <span className="bold">•</span>
          <p className="silver">영업 종료 시간: 오후 8:00</p>
        </div>
      </div>

      <div>
        <p className="bold">나이키 현대 동대문</p>
        <p className="silver">장충단로13길 20 현대시티아울렛 7층</p>
        <p className="silver">중구, 서울특별시, 04563, KR</p>
        <div className="flex">
          <p>영업 중</p>
          <span className="bold">•</span>
          <p className="silver">영업 종료 시간: 오후 8:00</p>
        </div>
      </div>

    </div>
  }
}

export default KakaoMap;