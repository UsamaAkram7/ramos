import React, { useEffect } from "react";
import "./contact.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <div className="contact-container">
      <div className="top-container" data-aos='fade-up'>
        <div className="header-links">
          <a href="#">About</a>
          <a href="#">Why us</a>
          <a href="#">Platform</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>
        <div className="email">hello@ramos.com</div>
      </div>

      <div className="mid-container" data-aos='fade-up'>
        <div className="address-container">
          <div className="address">
            <h5>Warrensvile Heights</h5>
            <p>14418 Vineyard Drive NC. <br /> 44128</p>
          </div>
          <div className="address">
            <h5>Saint louis</h5>
            <p>1366 Penn Street <br /> 16801</p>
          </div>
        </div>
        <div className="social-contact">
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
        </div>
      </div>

      <div className="bottom-container" data-aos='fade-up'>
        <h1>Ramos <sup>®</sup></h1>
        <p>Privacy Policy</p>
        <p>License agreement</p>
        <img className="scan-code" src='/qr-code.png' />
      </div>
    </div>
  );
};

export default Contact;
