import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p className="text-muted credit">
          © 2024 Blog Website. All Rights Reserved. Designed by{' Rohan Sharma '}
          
        </p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/about" className="text-muted">
              About
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/contact" className="text-muted">
              Contact
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/privacy-policy" className="text-muted">
              Privacy Policy
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/terms-of-use" className="text-muted">
              Terms of Use
            </a>
          </li><br/><br/><br/><br/>
        </ul>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#" className="text-muted social-icon">
              <FaFacebookF />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-muted social-icon">
              <FaTwitter />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-muted social-icon">
              <FaInstagram />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-muted social-icon">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;