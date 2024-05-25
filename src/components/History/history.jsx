import React, {useEffect} from "react";
import "./history.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

const History = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  return (
    <div className="history-container">
      <img className='history-image-container' data-aos='zoom-in' src='/history-layout1.PNG'></img>
   </div>
  );
};

export default History;
