import React from 'react';
import '../css/ContactUs.css';
import Header from './Header';
import Footer from './Footer';

const Contactus = () => {

    return (
    <>
    <Header />
    <div className="contact-us">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>
          <i className="fas fa-envelope"></i>
          <span>Email: rohansharma989244@gmail.com</span>
        </p>
        <p>
          <i className="fas fa-phone"></i>
          <span>Phone: 97808-19353</span>
        </p>
        <p>
          <i className="fas fa-map-marker-alt"></i>
          <span>Address: Haibowal</span>
        </p>
      </div>
    </div><br></br><br></br>
        <Footer />
    </>
  );
};

export default Contactus;