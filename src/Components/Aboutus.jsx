import React from 'react';
import '../css/aboutus.css';
import Header from './Header'
import Footer from './Footer'

const AboutUs = () => {
  return (
    <>
     < Header />
    <div className="aboutus-container">
      <h1 className="aboutus-title">About Us</h1>
      <p className="aboutus-text">
        Welcome to our blog website! We are a team of passionate writers and content creators who love sharing our knowledge and insights with the world. Our mission is to provide high-quality, engaging, and informative content that inspires and educates our readers.
      </p>
      <p className="aboutus-text">
        Our blog covers a wide range of topics, including technology, lifestyle, travel, and more. We strive to create content that is both timely and relevant, and we are always looking for new and exciting topics to explore.
      </p>
      <p className="aboutus-text">
        If you have any questions, comments, or suggestions, please don't hesitate to contact us. We would love to hear from you!
      </p>
     
      </div>

      <Footer />
      </>
  );
};

export default AboutUs;