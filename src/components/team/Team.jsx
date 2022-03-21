import React from "react";
import "./team.css";
// import garga from "../../assets/ape1.png";
// import gordy from "../../assets/ape2.png";
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
            <br />
            <br />
            <span>GARGAMEL.</span> STARCRAFT OBSESSED. EATS SMURFS.
            <br />
            <br />
            <span>GORDON GONER.</span> REFORMED LEVERAGE ADDICT.
            <br />
            <br />
            <span>EMPEROR TOMATO KETCHUP.</span> SPENT ALL THEIR MONEY ON FIRST
            PRESSES AND PET-NAT.
            <br />
            <br />
            <span>NO SASS. </span> HERE FOR THE APES. NOT FOR THE SASS.
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
