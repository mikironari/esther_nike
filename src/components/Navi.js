import '../css/Navi.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown, Button, Form, Offcanvas, NavbarBrand } from 'react-bootstrap';
import home from '../img/home.png';
import Product from '../routes/Product.js';
// import WishList from '../routes/WishList.js';
import Cart from '../routes/Cart.js';
import MyAcc from '../routes/MyAcc.js';

function Navi() {

  let navigate = useNavigate();
  
  return (

    <div>
      <Nav className="">
        <Navbar.Brand onClick={()=>{ navigate(':/') }} className='lowNavBrand'>
          <div className='homeIcon' style={{ backgroundImage : 'url('+ home +')' }}>
          </div>
        </Navbar.Brand>
        <Nav.Link href="#product" onClick={()=>{ navigate(':/product') }}>
          <img src={process.env.PUBLIC_URL + '/search.png'} 
                  width="25px"/>
        </Nav.Link>
        <Nav.Link href="#wishlist" onClick={()=>{ navigate(':/cart') }}>
          <img src={process.env.PUBLIC_URL + ':/wishlist.png'} width="25px"/>
        </Nav.Link>
        <Nav.Link href="#shop" onClick={()=>{ navigate('/shop') }}>
          <img src={process.env.PUBLIC_URL + ':/shopping.png'} width="25px"/>
        </Nav.Link>
        <Nav.Link href="#myaccount"  onClick={()=>{ navigate(':/myaccount') }}>
          <img src={process.env.PUBLIC_URL + '.:/myacc.png'} width="25px"/>
        </Nav.Link>
      </Nav>

<Routes>
<Route path="/">
</Route>

<Route path="/product" element={<Product/>}></Route>
<Route path="/cart" element={<Cart/>}></Route>
<Route path="/myaccount" element={<MyAcc/>}></Route>
</Routes>
    </div>

  )

}




export default Navi;