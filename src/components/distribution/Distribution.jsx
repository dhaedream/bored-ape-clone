import React from "react";
import "./distribution.css";

const Distribution = () => {
  return (
    <div className="bayc__distribution">
      <div className="bayc__distribution-container">
        <div className="bayc__distribution-main">
          <div className="bayc__distribution-top">
            <h2>FAIR DISTRIBUTION</h2>
            <p>(BONDING CURVES ARE A PONZI)</p>
          </div>
          <div className="bayc__distribution-bottom">
            <p className="bayc__distribution-bottom_left">
              There are no bonding curves here. Buying a Bored Ape costs 0.08
              ETH. There are no price tiers; BAYC membership costs the same for
              everyone.
            </p>
          </div>
        </div>
        <div className="bayc__distribution-bottom_right-wrap">
          <p className="bayc__distribution-bottom_right">
            Note: Thirty apes are being withheld from the sale. These will be
            used for giveaways, puzzle rewards—and for the creators' BAYC
            memberships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
