import '../css/Footer.css';
import Accordion from 'react-bootstrap/Accordion';

function Footer() {

  return (
    <div className="footer left">
    
      <div className='footerPc'>
        <div className='footer1'>
          <ul>
            <li className='bold'>새로운 소식</li>
            <li className='bold'>멤버가입</li>
            <li className='bold'>매장안내</li>
            <li className='bold'>나이키 저널</li>
          </ul>

          <Accordion className='accordion vermo'>
            <Accordion.Item eventKey="0">
              <Accordion.Header className='accorHeader'>도움말</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li className='silver'>로그인 안내</li>
                  <li className='silver'>주문배송조회</li>
                  <li className='silver'>반품 정책</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className='accorHeader'>ABOUT NIKE</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li className='silver'>소식</li>
                  <li className='silver'>채용</li>
                  <li className='silver'>투자자</li>
                  <li className='silver'>지속가능성</li>
                </ul> 
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <div className='verpc'>
            <div>
              <p className='bold'>도움말</p>
              <h6 className='silver'>로그인 안내</h6>
              <h6 className='silver'>주문배송조회</h6>
              <h6 className='silver'>반품 정책</h6>
            </div>

            <div>
              <p className='bold'>ABOUT NIKE</p>
              <h6 className='silver'>소식</h6>
              <h6 className='silver'>채용</h6>
              <h6 className='silver'>투자자</h6>
              <h6 className='silver'>지속 가능성</h6>
            </div>
          </div>
        </div>
  
        <div className='footer2'>
          
          <ul className='flex'>
            <li>
              <img src={process.env.PUBLIC_URL + '/facebook.png'} />
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/youtube.png'} />
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/instagram.png'} />
            </li>
            <li>
            <img src={process.env.PUBLIC_URL + '/twitter.png'} />
            </li>
          </ul>
        </div>
      </div>

      <div className='footer3'>
        <div>
          <div className='flex'>
            <div>
              <img src={process.env.PUBLIC_URL + '/location.png'} />
            </div>
            <p className='bold'>대한민국</p>
          </div>
          <p className='silver'>© 2023 Nike, Inc. All Rights Reserved</p>
        </div>

        <ul>
          <li className='silver'>이용약관</li>
          <li className='silver'>개인정보처리방침</li>
          <li className='silver'>위치 기반 서비스 약관</li>
          <li className='silver'>영상정보처리긱 운영 방침</li>
        </ul>
      </div>

      <div className='footer4'>

        <div>
          <span className='silver'>(유)나이키코리아 대표 Kimberlee Lynn Chang Mendes, 킴벌리 린 창 멘데스 | 서울 강남구 테헤란로 152 강남파이낸스센터 30층 | 통신판매업신고번호 2011-서울강남-03461 | 등록번호</span>
          <span className='silver'>220-88-09068</span>
          <span>사업자 정보 확인</span>
        </div>
        
      </div>

    </div>


    // <div className="footer left">

    //   <ul className='footer1'>
    //     <li>새로운 소식</li>
    //     <li>멤버가입</li>
    //     <li>매장안내</li>
    //     <li>나이키 저널</li>
    //   </ul>

    //   <div className='footer2'>

    //     <Accordion className='accordion'>
    //       <Accordion.Item eventKey="0">
    //         <Accordion.Header className='accorHeader'>도움말</Accordion.Header>
    //         <Accordion.Body>
    //           <ul>
    //             <li>로그인 안내</li>
    //             <li>주문배송조회</li>
    //             <li>반품 정책</li>
    //           </ul>
    //         </Accordion.Body>
    //       </Accordion.Item>
    //       <Accordion.Item eventKey="1">
    //         <Accordion.Header className='accorHeader'>ABOUT NIKE</Accordion.Header>
    //         <Accordion.Body>
    //           <ul>
    //             <li>소식</li>
    //             <li>채용</li>
    //             <li>투자자</li>
    //             <li>지속가능성</li>
    //           </ul> 
    //         </Accordion.Body>
    //       </Accordion.Item>
    //     </Accordion>

    //     <ul className='flex'>
    //       <li>
    //         <img src={process.env.PUBLIC_URL + '/facebook.png'} />
    //       </li>
    //       <li>
    //         <img src={process.env.PUBLIC_URL + '/youtube.png'} />
    //       </li>
    //       <li>
    //         <img src={process.env.PUBLIC_URL + '/instagram.png'} />
    //       </li>
    //       <li>
    //         <img src={process.env.PUBLIC_URL + '/twitter.png'} />
    //       </li>
    //     </ul>

    //     <div>
    //       <div className='flex'>
    //         <div>
    //           <img src={process.env.PUBLIC_URL + '/location.png'} />
    //         </div>
    //         <p className='bold'>대한민국</p>
    //       </div>
    //       <p className='silver'>© 2023 Nike, Inc. All Rights Reserved</p>
    //       <ul>
    //         <li className='silver'>이용약관</li>
    //         <li className='bold'>개인정보처리방침</li>
    //         <li className='silver'>위치 기반 서비스 약관</li>
    //         <li className='silver'>영상정보처리긱 운영 방침</li>
    //       </ul>
    //     </div>  

    //   </div> 

    //   <div className='footer3'>

    //     <div>
    //       <span className='silver'>(유)나이키코리아 대표 Kimberlee Lynn Chang Mendes, 킴벌리 린 창 멘데스 | 서울 강남구 테헤란로 152 강남파이낸스센터 30층 | 통신판매업신고번호 2011-서울강남-03461 | 등록번호</span>
    //       <span className='silver'>220-88-09068</span>
    //       <span>사업자 정보 확인</span>
    //     </div>
        
    //   </div>
    // </div>
  );
}


export default Footer;