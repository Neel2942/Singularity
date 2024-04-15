import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="h-footer-s1">
        <div className="h-footer-about">
          <h3>About</h3>
          <p>
            At Singularity, we are dedicated to providing innovative solutions to our customers' needs. Our mission is to empower individuals and businesses through technology. With a focus on quality and customer satisfaction, we strive to exceed expectations in every aspect of our business.
          </p>
        </div>
        <div className="h-footer-type">
          <h3>Products</h3>
          <h4>Laptop</h4>
          <h4>Mobiles</h4>
          <h4>Speaker</h4>
          <h4>EarBuds</h4>
          <h4>Headphone</h4>
          <h4>Smartwatches</h4>
        </div>
        <div className="h-footer-links">
          <h3>Quick Links</h3>
          <h4><Link to="/">Home</Link></h4>
          <h4><Link to="/about">About Us</Link></h4>
          <h4><Link to="/contact">Contact Us</Link></h4>
          <h4><Link to="/products">Products</Link></h4>
        </div>
      </div>
      <hr />
      <div className="h-footer-s2">
        <h3>Copyright © 2023 All Rights Reserved by Singularity.</h3>
      </div>
    </>
  )
}

export default Footer