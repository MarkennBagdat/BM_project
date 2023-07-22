import React from 'react';
import Img1 from './img2.svg';
import Img2 from './fa-twitter.svg';
import Img3 from './fa-google-plus.svg'
import Img4 from './fa-facebook-square.svg'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
      <img src={Img1} alt="image" />
      </div>
      <div className="footer-social">
        <a href="https://example.com/facebook" target="_blank" rel="noopener noreferrer">
        <img src={Img4} alt="image" />
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://example.com/twitter" target="_blank" rel="noopener noreferrer">
        <img src={Img2} alt="image" />
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://example.com/instagram" target="_blank" rel="noopener noreferrer">
        <img src={Img3} alt="image" />
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="footer-info">
        <p>&copy; 2023 Your Website. All rights reserved.</p>
        <p>123 Street, City, Country</p>
      </div>
    </footer>
  );
};

export default Footer;
