import React from "react";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="main-text">
        <div className="container1">
          <div class="image-container">
            <img class="image1" src="/thunder.png" />
            <img class="image2" src="/line-chart.png" />
          </div>
          <div className="text1"> Analytics</div>
          <div class="image-container">
            <img className="image3" src="play.png" />
            <img class="image4" src="/laptop.PNG" />
          </div>
        </div>
        <div>
          <div className="text2">that helps you</div>
        </div>
        <div>
          <div className="text3">shape </div>
          <img class="image5" src="/bar-chart.png" />
          <div className="text4">the future</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
