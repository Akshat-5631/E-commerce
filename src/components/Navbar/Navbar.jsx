import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../assets/Frontend_Assets/logo.png'
import cart_icon from '../assets/Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import nav_dropwdown from '../assets/Frontend_Assets/nav_dropdown.png'

const Navbar = () => {

  const [menu , setMenu] = useState("shop");
  const {getTotalcartItems} =useContext (ShopContext)
  const menuRef = useRef(); 

  const dropwdown_toggle = (e) =>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <img  onClick={dropwdown_toggle} src={nav_dropwdown} alt="" />
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=> {setMenu("shop")}}><Link style={{textDecoration : "none"}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=> {setMenu("mens")}}><Link style={{textDecoration : "none"}} to="/mens">Men</Link> {menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=> {setMenu("womens")}}><Link style={{textDecoration : "none"}} to="/womens">Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=> {setMenu("kids")}}><Link style={{textDecoration : "none"}} to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalcartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar