import React from "react";
import "./team.css";
import garga from "../../assets/garga.png";
import gordy from "../../assets/gordy.png";
import sass from "../../assets/sass.png";
import tomato from "../../assets/tomato.png";

const Team = () => {
  return (
    <>
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
          <img src={garga} alt="garga" />
          <img src={gordy} alt="gordy" />
        </div>
        <div className="bayc__team-img_row2">
          <img src={tomato} alt="tomato" />
          <img src={sass} alt="sass" />
        </div>
      </div>
    </div>
          <p className="bayc__team-address">VERIFIED SMART CONTRACT ADDRESS: <a>0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D</a></p>

    </>
    
  );
};

export default Team;
