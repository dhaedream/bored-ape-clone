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
      {/* <div className="bayc__road-img_container">
        <img className="bayc__road-img" src={toilet} alt="toilet" />
      </div> */}
    </div>
  );
};

export default Roadmap;
