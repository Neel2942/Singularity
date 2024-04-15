import React from 'react'
import { Link,Outlet } from 'react-router-dom';
function Navbar() {
  return (
    <>
    <nav className="h-navigation">
      <h1 className="h-logo"><Link to="/">Singularity</Link></h1>
      <ul className="h-main-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
    <Outlet />
  </>
  )
}

export default Navbar