import React from "react";
import "./navbar.css";
import logo from "../../assets/bayc-logo.png";

const Navbar = () => {
  return (
    <div className="bayc__navbar">
      <div className="bayc__navbar-logo_container">
        <img src={logo} alt="logo" />
      </div>
      <div className="bayc__navbar-links_container">
        <p>
          <a href="#buy-an-ape">BUY AN APE</a>
        </p>
        <p>
          <a href="#roadmap">roadmap</a>
        </p>
        <p>
          <a href="#team">team</a>
        </p>
        <p>
          <a href="#gallery">gallery</a>
        </p>
        <p>
          <a href="#provenance">provenance</a>
        </p>
        <p>
          <a href="#members">members</a>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
