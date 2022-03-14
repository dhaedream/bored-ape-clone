import React from "react";
import { render } from "react-dom";
import {
  LogoYoutube,
  LogoInstagram,
  LogoDiscord,
  LogoTwitter,
} from "react-ionicons";
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
      <div className="bayc__navbar-icons">
        <a>
          <LogoYoutube color={"#fff"} title={"yt"} height="25px" width="25px" />
        </a>
        <a>
          <LogoInstagram
            color={"#fff"}
            title={"ig"}
            height="25px"
            width="25px"
          />
        </a>
        <a>
          <LogoDiscord color={"#fff"} title={"dc"} height="25px" width="25px" />
        </a>
        <a>
          <LogoTwitter color={"#fff"} title={"tw"} height="25px" width="25px" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
