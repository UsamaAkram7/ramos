import React from "react";
import "./reports.scss";

const Reports = () => {
  return (
    <div className="reports-container">
      <div className="report-top-block">
        <div className="report-col-left">
          <h2> Your key to strategic success through analytics </h2>
        </div>
        <div className="report-col-right">
          <p className="tagline"> Ready for exciting, Instantaneous all-accessible insights in real time? </p>
        </div>
      </div>

      <div className="report-middle-block">
        <div className="report-col-left">
          <div className="box1">
            <div>
              <div className='report-inner-container'>
                <div>
                  setting up reports
                </div>
                <h>
                  Fast and easy access to analytics
                </h>
                <p>
                  One platform is a comrehensive system of solutions that will be the first step towards digitilization of your business!
                </p>
              </div>
              <div className="statistics-container">
                <div>
                  Sales Statistics
                </div>
                <div>Total Profits  $ 267k</div>
                <div>Visitors</div>
                <div>57K</div>
              </div>
            </div>
          </div>

        </div>
        <div className="report-col-right">
          <div className="box2">
            <div>
              <div>
                profile avatar
              </div>
              <div>
                Transactions
                43k <span>14%</span>
              </div>
              <div>Widget control</div>
              <p>reports provide a comrehensive overview of important aspects of web analysis</p>
            </div>
          </div>
        </div>
      </div>


      <div className="report-bottom-block">
        <div className="upto">Upto</div>
        <div className="number">45%</div>
        <p>
          Increase your analytics efficiency upto 45%. Unique algorithms provide insights
          from data, reduce time for analysis and save time for making important, informed decisions
        </p>
      </div>
    </div>
  );
};

export default Reports;
