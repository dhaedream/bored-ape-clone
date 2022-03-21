import React from "react";
import "./roadmap.css";
// import shirt from "../../assets/shirt.png";

const Roadmap = () => {
  return (
    <div className="bayc__road">
      <div className="bayc__road-feature_container">
        <div className="bayc__road-feature_title">
          <h1>ROADMAP ACTIVATIONS</h1>
        </div>
        <div className="bayc__road-feature-text">
          <p>
            We’re in this for the long haul.
            <br />
            <br />
            We’ve set up some goalposts for ourselves. Once we hit a target sell
            through percentage, we will begin to work on realizing the stated
            goal.
          </p>
        </div>
      </div>
      <div className="bayc__road-content_container">
        <div className="bayc__road-content_text-container">
          <div className="bayc__road-content_text-section">
            <div className="bayc__road-content_span-container">
              <span></span>
            </div>
            <div className="bayc__road-content_info-container">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
