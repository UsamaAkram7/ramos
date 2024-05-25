import React from "react";
import "./settings.scss";

const Settings = () => {
  return (
    <div className="settings-container">
      <h1>
        We give you full <span>control</span> over you data
      </h1>
      <div className="main-container">
        <div className="box">
          <h2>Improved Customer Service</h2>
          <p>
            Analytics help optimize services processes by providing information
            on how to improve interations with customers and increase their
            satisfaction
          </p>
        </div>
        <div className="box">
          <h2>Monitoring Key Indicators</h2>
          <p>
            Analytics platforms allow bussinesses to track KPIs, an important
            tool for measuring success and achieving goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
