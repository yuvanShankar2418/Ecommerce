import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav id="navbar">

      <Link to="/" style={{textDecoration:"none",color:"white",fontFamily:"cursive"}}>Home</Link>
      <Link to="/products" style={{textDecoration:"none",color:"white",fontFamily:"cursive"}}>Products</Link>
      <Link to="/contact" style={{textDecoration:"none",color:"white",fontFamily:"cursive"}}>Contact</Link>
      <Link to="/about" style={{textDecoration:"none",color:'white',fontFamily:"cursive"}}>About</Link>
     <Link to="/cart" style={{color:"white",textDecoration:"none",fontFamily:"cursive"}}>Cart</Link>
    </nav>
  );
}

export default Navbar;
