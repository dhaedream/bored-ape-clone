import React from "react";
import "./specs.css";

const Specs = () => {
  return (
    <div className="bayc__specs">
      <div className="bayc__specs-feature_container">
        <h1>THE SPECS</h1>
        <div className="bayc__specs-feature_paragraph-wrapper">
          <p>
            Each Bored Ape is unique and programmatically generated from over
            170 possible traits, including expression, headwear, clothing, and
            more. All apes are dope, but some are rarer than others. ~{"\n"}
            The apes are stored as ERC-721 tokens on the Ethereum blockchain and
            hosted on IPFS. (See Record and Proof.) Purchasing an ape costs 0.08
            ETH. ~{"\n"}
            To access members-only areas such as THE BATHROOM, Apeholders will
            need to be signed into their Metamask Wallet.
          </p>
        </div>
      </div>
      <div className="bayc__specs-img_wrapper">
        <img />
      </div>
    </div>
  );
};

export default Specs;
