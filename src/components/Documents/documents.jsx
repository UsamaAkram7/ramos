import React from "react";
import "./documents.scss";

const Documents = () => {
  return (
    <div className="documents-container">
      <h1>
        Maximize <span>efficiency</span> with our intuitive
      </h1>

      <div className="documents-content">
        <div className="image-container11">
          <img className="image11" src='/thunder.png' />
          <div className="image12">45% <span>system grow faster</span></div>
        </div>
        <div className="image13">
          analytics services
        </div>
      </div>

      <div className="documents-bottom">
        <div className="documents-bottom-content">
          Explore traffic sources, page behaviour, conversions and more to gain deep insights
          into your audience. With us, your business doesn't just adapt - it evolves
        </div>

        <div>
          <button>
            Request a demo
          </button>
          <button>
            Start for free
          </button>
        </div>
      </div>


    </div>
  );
};

export default Documents;
