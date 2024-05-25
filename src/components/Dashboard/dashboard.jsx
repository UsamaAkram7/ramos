import React, { useEffect } from "react";
import "./dashboard.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Dashboard = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  return (
    <>
      <div className="dashboard-container">


        <div className="top-block">
          <div data-aos='fade-right'>
            <div className="text-block">
              <span className="image-container">
                <img class="image1" src="/thunder.png" />
                <img class="image2" src="/line-chart.png" />
              </span>

              Analytics
            </div>

            <div className="text-block">that <span>helps</span> you</div>
          </div>

          <div className="image-container1" data-aos='zoom-in'>
            <img className="image3" src="play.png" />
            <img class="image4" src="/laptop.PNG" />
          </div>
        </div>

        <div className="text-block-2" data-aos='fade-right'>
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
