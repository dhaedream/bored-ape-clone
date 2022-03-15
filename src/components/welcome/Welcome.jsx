import React from "react";
import "./welcome.css";
import ape1 from "../../assets/ape1.png";
import ape2 from "../../assets/ape2.png";
import ape3 from "../../assets/ape3.png";
import ape4 from "../../assets/ape4.png";

const Feature = () => {
  return (
    <div className="bayc__welcome">
      <div className="bayc__welcome-feature_container">
        <div className="bayc__welcome-feature_title">
          <h1>WELCOME TO THE BORED APE YACHT CLUB</h1>
        </div>
        <div className="bayc__welcome-feature-text">
          <p>
            BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
            collectibles living on the Ethereum blockchain. Your Bored Ape
            doubles as your Yacht Club membership card, and grants access to
            members-only benefits, the first of which is access to THE BATHROOM,
            a collaborative graffiti board. Future areas and perks can be
            unlocked by the community through roadmap activation.
          </p>
        </div>
      </div>
      <div className="bayc__welcome-img_container">
        <div className="bayc__welcome-img_row1">
          <img src={ape1} alt="ape1" />
          <img src={ape2} alt="ape2" />
        </div>
        <div className="bayc__welcome-img_row2">
          <img src={ape3} alt="ape3" />
          <img src={ape4} alt="ape4" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
