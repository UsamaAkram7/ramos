import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="top-container">
        <div className="header-links">
          <a href="#">About</a>
          <a href="#">Why us</a>
          <a href="#">Platform</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>
        <div className="email">hello@ramos.com</div>
      </div>
      <div className="mid-container">
        <div className="address-container">
          <div className="address">
            <h>Warrensvile Heights</h>
            <p>14418 Vineyard Drive NC. 44128</p>
          </div>
          <div className="address">
            <h>Saint louis</h>
            <p>1366 Penn Street 16801</p>
          </div>
        </div>
        <div className="social-contact">
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
        </div>
      </div>
      <div className="bottom-container">
        <h1>Ramos <span>®</span></h1>
        <p>Privacy Policy</p>
        <p>License agreement</p>
        <img className="scan-code" src='/qr-code.png' />
      </div>
    </div>
  );
};

export default Contact;
