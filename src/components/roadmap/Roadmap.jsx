import React from "react";
import "./roadmap.css";
// import shirt from "../../assets/shirt.png";

const Roadmap = () => {
  return (
    <div className="bayc__road">
      <div className="bayc__road-feature_container">
        <div className="bayc__road-feature_title">
          <h1>ROADMAP ACTIVATIONS</h1>
        </div>
        <div className="bayc__road-feature-text">
          <p>
            We’re in this for the long haul.
            <br />
            <br />
            We’ve set up some goalposts for ourselves. Once we hit a target sell
            through percentage, we will begin to work on realizing the stated
            goal.
          </p>
        </div>
      </div>

      <div className="bayc__road-bottom_outer-container">
        <div className="bayc__road-content_container">
          <div className="bayc__road-content_text-container">
            <div className="bayc__road-content_text-section">
              <div className="bayc__road-content_span-container">
                <span>10%</span>
              </div>
              <div className="bayc__road-content_info-container">
                <p>We pay back our moms.</p>
              </div>
            </div>

            <div className="bayc__road-content_text-section">
              <div className="bayc__road-content_span-container">
                <span>20%</span>
              </div>
              <div className="bayc__road-content_info-container">
                <p>
                  We release the Caged Apes. 5 Caged Apes (tokens held back from
                  the sale) are airdropped to random Apeholders.
                </p>
              </div>
            </div>

            <div className="bayc__road-content_text-section">
              <div className="bayc__road-content_span-container">
                <span>40%</span>
              </div>
              <div className="bayc__road-content_info-container">
                <p>
                  BAYC gets its own YouTube channel, BAYC LoFi Radio - Beats to
                  Ape into Shitcoins To.
                </p>
              </div>
            </div>
            <div className="bayc__road-content_text-section">
              <div className="bayc__road-content_span-container">
                <span>60%</span>
              </div>
              <div className="bayc__road-content_info-container">
                <p>
                  Member-Exclusive BAYC Merch Store gets unlocked, featuring
                  Limited Edition tees, hoodies, and other goodies.
                </p>
              </div>
            </div>
            <div className="bayc__road-content_text-section">
              <div className="bayc__road-content_span-container">
                <span>80%</span>
              </div>
              <div className="bayc__road-content_info-container">
                <p>
                  The clubhouse image becomes interactive and the Mysterious
                  Note becomes legible, beginning a treasure hunt. The first to
                  solve the mystery will be rewarded 5 ETH and a Bored Ape.
                </p>
              </div>
            </div>
            <div className="bayc__road-content_text-section">
              <div className="bayc__road-content_span-container">
                <span>90%</span>
              </div>
              <div className="bayc__road-content_info-container">
                <p>The Bored Ape liquidity pool is initiated.</p>
              </div>
            </div>
            <div className="bayc__road-content_text-section">
              <div className="bayc__road-content_span-container">
                <span>100%</span>
              </div>
              <div className="bayc__road-content_info-container">
                <p>
                  The Mutant Ape (NFT Breeding) Arcade Machine gets ﬁxed. And we
                  cook up new ways to ape with our friends.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bayc__road-media_container">
          <div className="bayc__road-yellow-box"></div>
          {/* <img /> */}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
