import React from 'react';
import '../css/contact.css';


const Contactus = () => {

    return (
    <>
  
    <div className="contact-us1">
      <h2>Contact Us</h2>
      <div className="contact-info1">
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

        <br></br><br /><br />
          <p className='p'>You Can Easily Contact Us with This Email-Id or Phone-Number At 24/7.</p>
       
      </div>
    </div>
      
    </>
  );
};

export default Contactus;