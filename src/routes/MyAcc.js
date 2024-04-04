// import { useParems } from "react-router-dom";
import "../css/MyAcc.css"

function MyAcc() { //props

  // let {mypage} = useParams() 

  return (
    <>
      <div className="myAcc">

        <div className="acc1 center">
          <img src={process.env.PUBLIC_URL + '/profile.png'} width="100px"/>
          <h3 className="center my-4">김나이키</h3>

          <div className="mb-5">
            <p className="center">프로필 수정</p>
          </div>

          <div className="spabet">
            <div>
              <img src={process.env.PUBLIC_URL + '/order.png'} width="40px"/>
              <h6 className="center mt-3">주문</h6>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + '/pass.png'} width="40px"/>
              <h6 className="center mt-3">패스</h6>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + '/event.png'} width="40px"/>
              <h6 className="center mt-3">이벤트</h6>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + '/setting.png'} width="40px"/>
              <h6 className="center mt-3">설명</h6>
            </div>
          </div>
        </div>

        <div className="acc2">
          <div>
            <div className="spabet">
              <div>
                <p>수신함</p>
                <h6>메세지 보내기</h6>
              </div>
              <img src={process.env.PUBLIC_URL + '/arrow.png'} width="30px" height="30px"/>
            </div>
          </div>

          <div>
            <div className="spabet">
              <div>
                <p>멤버 리워드</p>
                <h6>1개 사용 가능</h6>
              </div>
              <img src={process.env.PUBLIC_URL + '/arrow.png'} width="30px" height="30px"/>
            </div>
          </div>
        </div>

        <div className="acc3">
          <div className="spabet">
            <p>팔로잉(2)</p>
            <h6 className="grey">편집</h6>
          </div>

          <div className="flex">
            <div>
              <img src={process.env.PUBLIC_URL + '/follow1.jpeg'} width="100px"/>
            </div>  

            <div>
              <img src={process.env.PUBLIC_URL + '/follow2.jpeg'} width="100px"/>
            </div> 
          </div>

        </div>

        <div className="acc4 banner">
          <h6 className="center grey">회원 가입일: 2018년 07월</h6>
        </div>
      </div>
    </>
  )
}

export default MyAcc;