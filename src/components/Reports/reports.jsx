import React from "react";
import "./reports.scss";

const Reports = () => {
  return (
    <div className="reports-container">
      <div className="report-top-block">
        <div className="report-col-left">
          <h1 style={{ fontSize: "40px", marginBottom: "50px" }}>
            {" "}
            Your key to strategic success through analytics{" "}
          </h1>
        </div>
        <div className="report-col-right">
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
              <button className="setting-btn">
                <strong>setting up reports </strong>
              </button>
              <h2>
                Fast and easy access <br /> to analytics
              </h2>
              <p className="one-platform">
                One platform is a comrehensive system of solutions that will be
                the first step towards digitilization of your business!
              </p>
            </div>
            <div className="statistics-container">
              <div className="trans-details">
                {/* <div >
                <h3>Sales Statistics</h3>
                <p>Total Profits $ 267k</p>
              </div>
              <div className="sale-details">
                <p>Visitors</p>
                <p>57K</p>
              </div> */}
                <img alt="test" src="/graph-info.PNG" />
              </div>
            </div>
          </div>
        </div>
        <div className="report-col-right">
          <div className="box2">
            <div className="trans-details">
              <div className="profile-details">
                <img className="reports-image1" src="/layers-yellow.png" />
                <div className="reports-image-container">
                  <img className="reports-image2" src="/man.png" />
                  <img className="reports-image3" src="/woman.png" />
                </div>
              </div>

              <div className="profile-details">
                Transactions 43k <span>14%</span>
              </div>
            </div>
            <h3 className="repo-heading">Widget control</h3>
            <p className="repo-text">
              reports provide a comrehensive overview of important aspects of
              web analysis
            </p>
          </div>
        </div>
      </div>

      <div className="report-bottom-block">
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
