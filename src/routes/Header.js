import '../css/Header.css';
import { Container, Nav, Navbar, NavDropdown, Button, Form, Offcanvas, NavbarBrand } from 'react-bootstrap';
import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Hamburger from 'hamburger-react';
// import Navi from '../components/Navi.js';
import Main from './Main.js';
import Men from './Men.js';
import Women from './Women.js';
import Kids from './Kids.js';
import Product from './Product.js';
// import WishList from './WishList.js';
import Cart from './Cart.js';
import MyAcc from './MyAcc.js';
import KakaoMap from './KakaoMap.js';


function Header() {

  let navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);
  // const handleIsOpen = () => {
  //   setOpen(!isOpen);
  // };
  const closeSideBar = () => {
    setOpen(false);
  };

  
  return (

    <div>
      <div className="verpc pcbanner">
        <div className="flex">
          <div>
            {/* <img src={process.env.PUBLIC_URL + '/jordan.png'} width="25px"/> */}
          </div>
          <div>
            {/* <img src={process.env.PUBLIC_URL + '/converse.png'} width="25px"/> */}
          </div>
        </div>

        <div className="flex">
          <Link to="/kakaomap" className=''>
            <h6 className="bold">매장찾기</h6>
          </Link>
          <span>|</span>
          <Link to="/myaccount" className='flex'>
            <h6 className="bold">김나이키님, 안녕하세요.</h6>
            <div className='myacc'>
              <img src={process.env.PUBLIC_URL + '/myacc.png'} 
                  width="20px" height="20px"/>
            </div>
          </Link>
        </div>
      </div>
      
      {/* 헤더 */}
      <Navbar className='upperNav'>
        <Navbar.Brand href="#" onClick={()=>{ navigate('/') }}>
          <div> 
            <img src={process.env.PUBLIC_URL + '/logo.png'} width="80px"/>
          </div>  
        </Navbar.Brand>

        <div className=" verpc pcNav-2">
          <Link to="/men">
            <h3>Men</h3>
          </Link>
          <Link to="/women">
            <h3>Women</h3>
          </Link>
          <Link to="/kids">
            <h3>Kids</h3>
          </Link>
        </div>

        <div className=" verpc pcNav-3">
          <div className="spabet">
            <div>
              <img src={process.env.PUBLIC_URL + '/search.png'} width="20px"/>
            </div>
            <input></input>
          </div>
          <Link to="/product" className='product'>
            <img src={process.env.PUBLIC_URL + '/wishlist.png'} 
                width="20px" height="20px"/>
          </Link>
          <Link to="/cart" className='cart'>
            <img src={process.env.PUBLIC_URL + '/shopping.png'} 
                width="20px" height="20px"/>
          </Link>
        </div>
          
        <div className='menu vermo'>
          <Hamburger size={40} direction="right" toggled={isOpen} 
          toggle={setOpen} />   
          <ul className={isOpen ? "show-menu" : "hide-menu"}>
            <li>
              <li onClick={closeSideBar} className='left'>
                <Link to="/" >HOME</Link>
              </li>
              <li onClick={closeSideBar} className='left'>
                <Link to="/men" >MEN</Link>
              </li>
              <li onClick={closeSideBar} className='left'>
                <Link to="/women" >WOMEN</Link>
              </li>
              <li onClick={closeSideBar} className='left'>
                <Link to="/kids" >KIDS</Link>
              </li>
              <li onClick={closeSideBar} className='left'>
                <Link to="/product" >PRODUCT</Link>
              </li>
              <li  className='left'>
                <Link to="/cart" onClick={closeSideBar}>CART</Link>
              </li>
              {/* <li onClick={closeSideBar} className='left'>
              <Link to="/shop">Shop</Link>
              </li> */}
            </li>

            <li className='mt-5'>
              <Link to="/myaccount" onClick={closeSideBar} className='left flex'>
                <img src={process.env.PUBLIC_URL + '/myacc.png'} 
                      width="20px" height="20px"/>
                <p>MY ACCOUNT</p>
              </Link>
            
              <Link to="/kakaomap"  onClick={closeSideBar} className='flex'>
                <img src={process.env.PUBLIC_URL + '/store.png'} 
                      width="20px" height="20px"/>
                <p>매장찾기</p>
              </Link>
            </li>
          </ul>
        </div>

      </Navbar> 

      {/* 햄버거 네브
      <Nav className="">
        <Navbar.Brand onClick={()=>{ navigate(':/') }} className='lowNavBrand'>
          <div className='homeIcon' style={{ backgroundImage : 'url('+ home +')' }}>
          </div>
        </Navbar.Brand>
        <Nav.Link href="#search" onClick={()=>{ navigate(':/search') }}>
          <img src={process.env.PUBLIC_URL + '/search.png'} 
                  width="25px"/>
        </Nav.Link>
        <Nav.Link href="#wishlist" onClick={()=>{ navigate(':/wishlist') }}>
          <img src={process.env.PUBLIC_URL + ':/wishlist.png'} width="25px"/>
        </Nav.Link>
        <Nav.Link href="#shop" onClick={()=>{ navigate('/cart') }}>
          <img src={process.env.PUBLIC_URL + ':/shopping.png'} width="25px"/>
        </Nav.Link>
        <Nav.Link href="#myaccount"  onClick={()=>{ navigate(':/myaccount') }}>
          <img src={process.env.PUBLIC_URL + '.:/myacc.png'} width="25px"/>
        </Nav.Link>
      </Nav> */}

      

      <Routes>
        <Route >
          <Route path="/" element={<Main/>}></Route>
          <Route path="/men" element={<Men/>}></Route>
          <Route path="/women" element={<Women/>}></Route>
          <Route path="/kids" element={<Kids/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          {/* <Route path="/wishlist" element={<WishList/>}></Route> */}
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/myaccount" element={<MyAcc/>}></Route>
          <Route path="/kakaomap" element={<KakaoMap />}></Route>
        </Route>
      </Routes> 

    </div>


    

  )


}




export default Header;

