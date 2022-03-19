import React from "react";
import "./bathroom.css";
import toilet from "../../assets/toilet.png";

const Bathroom = () => {
  return (
    <div className="bayc__bath">
      <div className="bayc__bath-feature_container">
        <div className="bayc__bath-feature_title">
          <h1>THE BATHROOM</h1>
        </div>
        <div className="bayc__bath-feature-text">
          <p>
            The BAYC Bathroom will become operational once the presale period is
            over. It contains a canvas accessible only to wallets containing at
            least one ape. Like any good dive bar bathroom, this is the place to
            draw, scrawl, or write expletives.
            <br />
            <br />
            Each ape-holder will be able to paint a pixel on the bathroom wall
            every fifteen minutes. Think of it as a collaborative art experiment
            for the cryptosphere. A members-only canvas for the discerning minds
            of crypto twitter.
            <br />
            <br />
            We're pretty sure it's going to be full of dicks.
          </p>
        </div>
      </div>
      <div className="bayc__bath-img_container">
        <img className="bayc__bath-img" src={toilet} alt="toilet" />
      </div>
    </div>
  );
};

export default Bathroom;
