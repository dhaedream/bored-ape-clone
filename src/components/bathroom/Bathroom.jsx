import React from "react";
import "./bathroom.css";
import toilet from "../../assets/toilet.png";

const Specs = () => {
  return (
    <div className="bayc__bath">
      <div className="bayc__bath-feature_container">
        <div className="bayc__bath-feature_title">
          <h1>THE BATHROOM</h1>
        </div>
        <div className="bayc__bath-feature-text">
          <p>
            Each Bored Ape is unique and programmatically generated from over
            170 possible traits, including expression, headwear, clothing, and
            more. All apes are dope, but some are rarer than others.
            <br />
            <br />
            The apes are stored as ERC-721 tokens on the Ethereum blockchain and
            hosted on IPFS. (See Record and Proof.) Purchasing an ape costs 0.08
            ETH.
            <br />
            <br />
            To access members-only areas such as THE BATHROOM, Apeholders will
            need to be signed into their Metamask Wallet.
          </p>
        </div>
      </div>
      <div className="bayc__specs-gif_container">
        <div className="bayc__specs-gif_container_inner">
          <img
            className="bayc__specs-gif"
            id="apeGif"
            src={toilet}
            alt="ape gif"
          />
        </div>
      </div>
    </div>
  );
};

export default Specs;
