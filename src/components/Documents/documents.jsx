import React, { useEffect } from "react";
import "./documents.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Documents = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <div className="documents-container">
      <h1 data-aos='fade-right'>
        Maximize <span>efficiency</span> with our intuitive
      </h1>

      <div className="documents-content" data-aos='fade-right'>
        <div className="image-container11">
          <img className="image11" src='/thunder.png' />
          <div className="image12">45% <span data-aos='fade-right'>system grow faster</span></div>
        </div>
        <div className="image13">
          analytics services
        </div>
      </div>

      <div className="documents-bottom" data-aos='fade-right'>
        <div className="documents-bottom-content">
          Explore traffic sources, page behaviour, conversions and more to gain deep insights <br />
          into your audience. With us, your business doesn't just adapt - it evolves
        </div>

        <div className="buttons-container">
        <button className="demo-button">Request a demo</button>
        <button className="start-button">Start for free</button>
      </div>
      </div>


    </div>
  );
};

export default Documents;
