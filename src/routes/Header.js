import '../css/Header.css';
import { Container, Nav, Navbar, NavDropdown, Button, Form, Offcanvas, NavbarBrand } from 'react-bootstrap';
import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Hamburger from 'hamburger-react';
// import Navi from '../components/Navi.js';
import Main from './Main.js';
import Product from './Product.js';
// import WishList from './WishList.js';
import Cart from './Cart.js';
import MyAcc from './MyAcc.js';


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
      {/* 헤더 */}
      <Navbar className='upperNav'>
        <Navbar.Brand href="#" onClick={()=>{ navigate('/') }}>
          <div> 
            <img src={process.env.PUBLIC_URL + '/logo.png'} width="80px"/>
          </div>  
        </Navbar.Brand>
          
        <div className='menu'>
          <Hamburger size={40} direction="right" toggled={isOpen} 
          toggle={setOpen} />   
          <ul className={isOpen ? "show-menu" : "hide-menu"}>
            <li onClick={closeSideBar} className='left'>
              <Link to="/" >HOME</Link>
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
            <li onClick={closeSideBar} className='left'>
              <Link to="/myaccount" >MY ACCOUNT</Link>
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
          <Route path="/product" element={<Product/>}></Route>
          {/* <Route path="/wishlist" element={<WishList/>}></Route> */}
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/myaccount" element={<MyAcc/>}></Route>
        </Route>
      </Routes> 

    </div>


    

  )

  return {
    
  }

}




export default Header;

