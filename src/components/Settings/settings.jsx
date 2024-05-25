import React, { useEffect, useRef }from "react";
import "./settings.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useScrollTriggeredCountUp from "../ScrollCounter/scroll";

const Settings = () => {
  const ref = useRef(null);
  const count = useScrollTriggeredCountUp(ref, 131);
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  return (
    <div className="settings-container">
      <h1 data-aos="fade-right">
        We give you full <span>control</span> over you data
      </h1>
      <div className="main-container">
        <div className="left-box">
          <div className="top-container">
            <div className="left-inner-box">
              <h3 data-aos="fade-right">Conversion rate</h3>
              <div className="parcentage-bar" data-aos="fade-right">2,3%</div>
              <p data-aos="fade-right">
                percentage of <br /> website visitors
              </p>
            </div>
            <div className="right-inner-box">
              <div className="upper-section" >
                <p data-aos="zoom-in" >Sales revenue</p>
                <h2 ref={ref}>$ {count},2K</h2>
                <div className="progress-container" data-aos="fade-right">
                  <div className="progress-bar1" />
                  <div className="progress-bar2" />
                  <div className="progress-bar1" />
                </div>
              </div>
              <div className="list-container" data-aos="fade-right">
                <div className="progress-container">
                  <img className="image" src="/woman.png" />
                  <p>Min price</p>
                  <h3>1200$</h3>
                </div>
                <div className="progress-container">
                  <img className="image" src="/man.png" />
                  <p>Max price</p>
                  <h3>2320$</h3>
                </div>
                <div className="divider"></div>
                <div className="progress-container">
                  <p>Engagement rate</p>
                  <h3>47.84%</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="settings-bottom-container" data-aos="fade-right">
            <h2>Improved Customer Service</h2>
            <p>
              Analytics help optimize services processes by <br /> providing
              information on how to improve interations <br /> with customers
              and increase their satisfaction
            </p>
          </div>
        </div>
        <div className="right-box">
          <div className="graph-image-container" data-aos="zoom-in">
            <img className="graph-image" src="/graph-picture.PNG" />
          </div>
          <div className="settings-bottom-container" data-aos="fade-right">
            <h2>Monitoring Key Indicators</h2>
            <p>
              Analytics platforms allow bussinesses to track <br /> KPIs, an important
              tool for measuring success <br /> and achieving goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
