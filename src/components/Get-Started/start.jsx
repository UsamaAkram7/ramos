import React, {useEffect} from "react";
import "./start.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

const GetStarted = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <div className="getStarted-container">
      <img className="logo-icon" data-aos='zoom-in' src="/logo-icon.png"></img>
      <h1 data-aos='fade-right'>Get Started</h1>
      <p data-aos='fade-right'>
        Turn information into advantage! Start using Ramos today. Sign up for a
        free trail.
      </p>
      <div className="buttons-container" data-aos='fade-right'>
        <button className="demo-button">Request a demo</button>
        <button className="start-button">Start for free</button>
      </div>
    </div>
  );
};

export default GetStarted;
