import React, { useEffect } from "react";
import "./reports.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Reports = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  })
  return (
    <div className="reports-container">
      <div className="report-top-block" >
        <div className="report-col-left" data-aos="fade-right">
          <h1 style={{ fontSize: "40px", marginBottom: "50px" }}>
            {" "}
            Your key to strategic success through analytics{" "}
          </h1>
        </div>
        <div className="report-col-right" data-aos="fade-right">
          <p className="tagline">
            {" "}
            Ready for exciting, Instantaneous all-accessible insights in real
            time?{" "}
          </p>
        </div>
      </div>

      <div className="report-middle-block">
        <div className="report-col-left">
          <div className="report-inner-container">
            <div>
              <button className="setting-btn" data-aos="fade-up">
                <strong>setting up reports </strong>
              </button>
              <h2 data-aos="fade-up">
                Fast and easy access <br /> to analytics
              </h2>
              <p className="one-platform" data-aos="fade-right">
                One platform is a comrehensive system of solutions that will be
                the first step towards digitilization of your business!
              </p>
            </div>
            <div className="statistics-container">
              <div className="statistics-details">
                {/* <div >
                <h3>Sales Statistics</h3>
                <p>Total Profits $ 267k</p>
              </div>
              <div className="sale-details">
                <p>Visitors</p>
                <p>57K</p>
              </div> */}
                <img className="graph-info-image-container" data-aos="zoom-in" alt="test" src="/graph-info.PNG" />
              </div>
            </div>
          </div>
        </div>
        <div className="report-col-right">
          <div className="box2">
            <div className="trans-details">
              <div className="profile-details">
                <img className="reports-image1" src="/layers-yellow.png" data-aos="flip-right" />
                <div className="reports-image-container" data-aos="flip-left">
                  <img className="reports-image2" src="/man.png" />
                  <img className="reports-image3" src="/woman.png" />
                </div>
              </div>

              <div className="profile-details">
                <p data-aos="fade-right">Transactions</p>
                <div className='percentage-info-container'>
                  <img alt='' className="percentage-image" src="/up-arrow.png"></img>
                  14%</div>
                <div className='statistic-container' data-aos="zoom-in">
                  43k
                </div>
              </div>
            </div>
            <h3 className="repo-heading" data-aos="fade-right">Widget control</h3>
            <p className="repo-text"data-aos="fade-right">
              Reports provide a comrehensive overview <br /> of important aspects of
              web analysis
            </p>
          </div>
        </div>
      </div>

      <div className="report-bottom-block" data-aos="fade-up">
        <div className="upto">Upto</div>
        <div className="number">45%</div>
        <p>
          Increase your analytics efficiency upto 45%. Unique algorithms provide
          insights from data, reduce time for analysis and save time for making
          important, informed decisions
        </p>
      </div>
    </div>
  );
};

export default Reports;
