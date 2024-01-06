import { useState } from "react";
import "../css/Cart.css";
import CartData from '../data/CartData';
import Form from 'react-bootstrap/Form';



function Cart() {

  let [cartList] = useState(CartData);

  return (
    
    <>
      <div className="cartPage">
        
        <h3 className="mb-4">장바구니</h3>
        <div>
          {
            cartList.map((a, i) => {
              return (
                <CartCard key={(a, i)} cartList={cartList[i]} i={i}></CartCard>
              )
            })
          }
        </div>

        <div className="mt-4">
          <div className="spabet">
            <p>상품 금액</p>
            <div>
              <span></span>
              <div className="flex">
                <p> 307,000</p>
                <p className="marleft10"> 원</p>
              </div>
            </div>
          </div>

          <div className="spabet green">
            <p>프로모션 할인</p>
            <div className="flex">
              <span>‒</span>
              <p>30,700</p>
              <p>원</p>
            </div>
          </div>

          <div className="spabet">
            <p>배송 옵션</p>
            <div className="flex">
              <p>표준</p>
              <span>‒</span>
              <p>무료</p>
            </div>
          </div>

          <div className="spabet mb-2">
            <p className="bold">총 결제 금액</p>
            <div className="flex">
              <p className="bold"> 276,300</p>
              <p className="bold marleft10"> 원</p>
            </div>
          </div>
        </div>

        <div className="center mt-4">
          <button className="blackbtn">주문하기</button>
        </div>

      </div>
    </>
    
  )

}

function CartCard(props) {
  return (
    
    <div className="cartCard">

      <div className="flex mt-4">
        <div className="mb-3">
          <img src={props.cartList.img}/>
        </div>  
        <div>
          <p className="bold">{ props.cartList.title }</p>
          <p>{ props.cartList.content }</p>
        </div>
      </div>

      <div className="spabet">
        <div className="flex">
          <p>수량</p>
          <Form.Select aria-label="Default select example">
            <option></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Form.Select>
        </div>
        <div className="flex">
          <p>{ props.cartList.price }</p>
          <p className="marleft10">원</p>
        </div>
      </div>

      <div className="flex mt-4 mb-3">
        <div>
          <img src={process.env.PUBLIC_URL + '/coupon.png'} width='20px'/>
        </div>
        <p className="green">생일 축하 프로모션 코드 10% 적용</p>
      </div>

    </div>

    
  )
}


export default Cart;