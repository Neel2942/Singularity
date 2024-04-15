import React from 'react'
import Footer from './Footer'

function ContactUs() {
  return (
    <>
      <div className="c-wrapper">
      <div className="c-title">
        <h1>Contact Us</h1>
      </div>
      <div className="c-contact-form">
        <div className="c-input-fields">
          <input type="text" className="input" placeholder="Name" />
          <input type="text" className="input" placeholder="Email Address" />
          <input type="text" className="input" placeholder="Phone" />
          <input type="text" className="input" placeholder="Subject" />
        </div>
        <div className="c-msg">
          <textarea placeholder="Message"></textarea>
        </div>
      </div>
      <div className="c-btn">send</div>
    </div>
    <div id="c-bgpic"></div>
    <Footer/>
    </>
  )
}

export default ContactUs