import React from 'react'
import Footer from './Footer'

function AboutUs() {
  return (
    <>
      <div className="a-banner-text">
        <p>
          Welcome to Singularity! We are dedicated to providing top-notch products and services to our customers.
          Our mission is to ensure customer satisfaction and build long-lasting relationships based on trust and reliability.
          Feel free to explore our website and discover more about our offerings.
        </p>
      </div>
      {/* About Us Section */}
      <section className="a-about-us">
        <h2>About Us</h2>
        {/* Add this code below the existing "About Us" section */}
        <section className="a-images">
          <div className="a-image">
            <img src="images/employees-in-staff-meeting.jpg" alt="Image 1" />
            <p className="image-caption">How we help</p>
          </div>

          <div className="a-image">
            <img src="images/B_Buy-Angrignon_LaSalle-.jpg" alt="Image 2" />
            <p className="image-caption">How we sell</p>
          </div>

          <div className="a-image">
            <img src="images/employees-in-staff-meeting.jpg" alt="Image 3" />
            <p className="image-caption">How we provide services</p>
          </div>
        </section>
        <div className="a-banner-text">
          <p>
            At our company, we believe in delivering excellence in every aspect of our business.
            Our dedicated team works tirelessly to meet and exceed customer expectations.
            With a focus on innovation and quality, we strive to be the best in the industry.
          </p>
        </div>

        {/* Add this code below the existing image section */}
        <section className="a-opposite-triangle">
          <p className="triangle-text">Our commitment to customer satisfaction drives everything we do.
            We understand the importance of listening to our customers and adapting to their needs.
            With a customer-centric approach, we aim to create meaningful experiences and build lasting relationships.
          </p>
        </section>

        <div className="row">
          <p>Happy Customers<span id="happyCount"><br />99,999+</span></p>
          <p>Services Provided<span id="servicesCount"><br />100+</span></p>
          <p>Company Outlets<span id="outletCount"><br />2500+</span></p>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default AboutUs