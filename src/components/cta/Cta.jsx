import React from "react";
import "./cta.css";

const Cta = () => {
  return (
    <div className="bayc__cta">
      <div className="bayc__cta-card">
        <h3>BUY AN APE</h3>
        <p>
          The initial sale has sold out. To get your Bored Ape, check out the
          collection on OpenSea.
        </p>
        <button className="bayc__cta-card_button" type="button">
          BUY AN APE ON OPENSEA
        </button>
      </div>
    </div>
  );
};

export default Cta;
