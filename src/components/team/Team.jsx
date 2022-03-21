import React from "react";
import "./team.css";
// import ape1 from "../../assets/ape1.png";
// import ape2 from "../../assets/ape2.png";
// import ape3 from "../../assets/ape3.png";
// import ape4 from "../../assets/ape4.png";

const Team = () => {
  return (
    <div className="bayc__team">
      <div className="bayc__team-feature_container">
        <div className="bayc__team-feature_title">
          <h1>THE TEAM</h1>
        </div>
        <div className="bayc__team-feature-text">
          <p>
            BAYC was created by four friends who set out to make some dope apes,
            test our skills, and try to build something (ridiculous).
          </p>
        </div>
      </div>
      <div className="bayc__team-img_container">
        <div className="bayc__team-img_row1">
          {/* <img src={ape1} alt="ape1" />
          <img src={ape2} alt="ape2" /> */}
        </div>
        <div className="bayc__team-img_row2">
          {/* <img src={ape3} alt="ape3" />
          <img src={ape4} alt="ape4" /> */}
        </div>
      </div>
    </div>
  );
};

export default Team;
