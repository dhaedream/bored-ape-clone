import React from "react";
import Feature from "../../components/feature/Feature";

const featuresData = [
  {
    title: "WELCOME TO THE BORED APE YACHT CLUB",
    text: "BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.",
  },
];

const Welcome = () => {
  return (
    <div>
      <div className="bayc__features-container">
        <Feature
          title={featuresData.title}
          text={featuresData.text}
          key={featuresData.title}
        />
      </div>
    </div>
  );
};

export default Welcome;
