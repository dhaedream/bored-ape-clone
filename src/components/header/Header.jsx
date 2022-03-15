import React from "react";
import "./header.css";
import heroImg from "../../assets/bayc-mutant-hero.png";

const Header = () => {
  return (
    <div className="bayc__header">
      <div className="bayc__header-img_container">
        <img src={heroImg} alt="header img" />
      </div>
    </div>
  );
};

export default Header;
