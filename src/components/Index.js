import React from 'react'
import Footer from './Footer';

const ProductCard = ({ image, title, description }) => {
  return (
    <div className="h-Bcard">
      <div className="h-cover-img">
        <img src={image} alt={title} />
      </div>
      <div className="h-info">
        <div className="h-info-title">
          <div className="h-info-title-name">
            <h4>{title}</h4>
          </div>
        </div>
        <div className="h-info-detail">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <>
      <div className="h-banner">
        <div className="h-b-img"></div>
        <img src="/images/laptop.jpg" alt="Laptop" />
        <div className="h-b-info">
          <h1>Featured Product of the Week</h1>
          <h3>Best Deals for Black Friday</h3>
          <button className="h-button">Learn More</button>
        </div>
      </div>
      <div className="h-products">
        <div className="h-products-heading">
          <div className="h-container">
            <h4>Explore Our Wide Range of Products</h4>
            <h2>Our Products</h2>
          </div>
        </div>
        <div className="h-card-section">
          <ProductCard
            image="/images/products1.jpg"
            title="Laptops"
            description="Discover our collection of powerful and sleek laptops, designed to meet your computing needs."
          />
          <ProductCard
            image="/images/products2.jpg"
            title="Mobile Phones"
            description="Stay connected with the latest mobile phones, featuring cutting-edge technology and stylish designs."
          />
          <ProductCard
            image="/images/products3.jpg"
            title="Bluetooth Speakers"
            description="Immerse yourself in rich, high-quality sound with our range of Bluetooth speakers, perfect for any occasion."
          />
          <ProductCard
            image="/images/products4.webp"
            title="Earbuds"
            description="Experience crystal-clear audio and ultimate comfort with our selection of earbuds, ideal for music lovers on the go."
          />
          <ProductCard
            image="/images/products5.webp"
            title="Headphones"
            description="Get lost in your favorite tunes with our premium headphones, offering superior sound quality and comfort."
          />
          <ProductCard
            image="/images/products6.webp"
            title="Smartwatches"
            description="Stay connected and track your fitness goals with our smartwatches, packed with features and style."
          />
        </div>
        <div className="h-c-button">
          <button className="h-button">View More Products</button>
        </div>
      </div>
      <div className="h-company">
        <div className="h-products-heading">
          <div className="h-container">
            <h4>Shop by Brand</h4>
            <h2>Our Partner Brands</h2>
          </div>
        </div>
        <div className="h-all-logo">
          <div className="h-c-logo">
            <img src="/images/logo1.png" alt="Boat" />
          </div>
          <div className="h-c-logo">
            <img src="/images/logo2.png" alt="Sony" />
          </div>
          <div className="h-c-logo">
            <img src="/images/logo3.png" alt="Bose" />
          </div>
          <div className="h-c-logo">
            <img src="/images/logo4.png" alt="Apple" />
          </div>
          <div className="h-c-logo">
            <img src="/images/logo5.png" alt="Skullcandy" />
          </div>
          <div className="h-c-logo">
            <img src="/images/logo6.png" alt="Fossil" />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Index