import React from "react";
import "./club.css";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";

const Club = () => {
  return (
    <div className="bayc__club">
      <div className="bayc__club-feature">
        <h1>WELCOME TO THE CLUB</h1>
        <p>
          When you buy a Bored Ape, you’re not simply buying an avatar or a
          provably-rare piece of art. You are gaining membership access to a
          club whose benefits and offerings will increase over time. Your Bored
          Ape can serve as your digital identity, and open digital doors for
          you.
        </p>
      </div>
      <div className="bayc__club-gallery">
        <div className="bayc__club-gallery_content">
          <img src={icon1} alt="" />
          <p>10,000 Provably-rare Bored Ape tokens</p>
        </div>
        <div className="bayc__club-gallery_content">
          <img src={icon2} alt="" />
          <p>Fair Launch, fair distribution: All apes cost 0.08 ETH</p>
        </div>
        <div className="bayc__club-gallery_content">
          <img src={icon3} alt="" />
          <p>
            Ownership and commercial usage rights given to the consumer over
            their NFTs
          </p>
        </div>
        <div className="bayc__club-gallery_content">
          <img src={icon4} alt="" />
          <p>The Bathroom: A member's-only graffiti board</p>
        </div>
        <div className="bayc__club-gallery_content">
          <img src={icon5} alt="" />
          <p>Gain additional benefits through roadmap activations</p>
        </div>
      </div>
    </div>
  );
};

export default Club;