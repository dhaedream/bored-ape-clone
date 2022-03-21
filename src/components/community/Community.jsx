import React from "react";
import "./community.css";

const Community = () => {
  return (
    <div className="bayc__comm">
      <div className="bayc__comm-feature_container">
        <div className="bayc__comm-feature_title">
          <h1>COMMUNITY TOOLS</h1>
        </div>
        <div className="bayc__comm-feature-text">
          <p>
            Here are some helpful tools created by the Bored Ape Yacht Club
            community. Please note that these are unofficial in nature. Every
            assignment of an ape's overall value or rarity is inherently
            subjective.
          </p>
        </div>
      </div>
      <div className="bayc__comm-button_container">
        <button className="bayc__comm-button" type="button">
          NFTEXP.IO
        </button>
        <button className="bayc__comm-button" type="button">
          RARITY.TOOLS
        </button>
      </div>
    </div>
  );
};

export default Community;
