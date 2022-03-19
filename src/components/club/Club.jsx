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
      <h1>WELCOME TO THE CLUB</h1>
      <div className="bayc__club-feature">
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
          <div className="bayc__club-gallery_content-pic">
            <img src={icon1} alt="" />
          </div>
          <div className="bayc__club-gallery_content-para">
            <p>10,000 Provably-rare Bored Ape tokens</p>
          </div>
        </div>
        <div className="bayc__club-gallery_content">
          <div className="bayc__club-gallery_content-pic">
            <img src={icon2} alt="" />
          </div>
          <div className="bayc__club-gallery_content-para">
            <p>Fair Launch, fair distribution: All apes cost 0.08 ETH</p>
          </div>
        </div>
        <div className="bayc__club-gallery_content">
          <div className="bayc__club-gallery_content-pic">
            <img src={icon3} alt="" />
          </div>
          <div className="bayc__club-gallery_content-para">
            <p>
              Ownership and commercial usage rights given to the consumer over
              their NFTs
            </p>
          </div>
        </div>
        <div className="bayc__club-gallery_content">
          <div className="bayc__club-gallery_content-pic">
            <img src={icon4} alt="" />
          </div>
          <div className="bayc__club-gallery_content-para">
            <p>The Bathroom: A member's-only graffiti board</p>
          </div>
        </div>
        <div className="bayc__club-gallery_content">
          <div className="bayc__club-gallery_content-pic">
            <img src={icon5} alt="" />
          </div>
          <div className="bayc__club-gallery_content-para">
            <p>Gain additional benefits through roadmap activations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Club;
