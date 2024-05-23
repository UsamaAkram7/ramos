import React from "react";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
        <div className="main-container">
          <div className="container1">
            <div class="image-container1">
              <img class="image1" src="/thunder.png" />
              <img class="image2" src="/line-chart.png" />
            </div>
            <div className="text1">Analytics that helps you</div>
          </div>
          <div class="image-container1">
            <img className="image3" src="play.png" />
            <img class="image4" src="/laptop.PNG" />
          </div>
        </div>
        <div className="text2">
          shape
          <img class="image5" src="/bar-chart.png" />
          your future
        </div>
    </div>
  );
};

export default Dashboard;
