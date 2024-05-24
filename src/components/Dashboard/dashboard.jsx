import React from "react";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <>
      {/* <div className="dashboard-container">
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
    </div> */}


      <div className="dashboard-container">


        <div className="top-block">
          <div>
            <div className="text-block">
              <span className="image-container">
                <img class="image1" src="/thunder.png" />
                <img class="image2" src="/line-chart.png" />
              </span>

              Analytics
            </div>

            <div className="text-block">that <span>helps</span> you</div>
          </div>

          <div className="image-container1">
            <img className="image3" src="play.png" />
            <img class="image4" src="/laptop.PNG" />
          </div>
        </div>

        <div className="text-block-2">
          shape
          <span className="image-container">
            <img class="image5" src="/bar-chart.png" />
          </span>
          the future
        </div>
      </div>




    </>

  );
};

export default Dashboard;
