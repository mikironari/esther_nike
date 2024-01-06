import './App.css';
// import { useState } from "react";
// import { Container, Nav, Navbar, NavDropdown, Button, Form, Offcanvas, NavbarBrand } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './routes/Header.js';
import Main from './routes/Main.js';
import Footer from './routes/Footer.js';
// import Navi from '../components/Navi.js';
// import Search from './Search.js';
// import WishList from './WishList.js';
// import Cart from './Cart.js';
// import MyAcc from './MyAcc.js';

// import data from './data/data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';



function App() {

  return (
    <div className="App">
      
      <Header />
      {/* <Routes>
        <Route path="/navi/*" element={<Navi/>}>
          <Route path="navi/:/"></Route>
          <Route path="navi/:search" element={<Search/>}></Route>
          <Route path="navi/:wishlist" element={<WishList/>}></Route>
          <Route path="navi/:cart" element={<Cart/>}></Route>
          <Route path="navi/:myaccount" element={<MyAcc/>}></Route>
        </Route>
      </Routes>  */}

      {/* <Main /> */}
      <Footer/>

    </div>

    
  );
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

export default App;
