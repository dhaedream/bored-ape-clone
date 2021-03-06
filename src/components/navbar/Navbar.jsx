import React, { useState } from "react";
import { render } from "react-dom";
import {
  LogoYoutube,
  LogoInstagram,
  LogoDiscord,
  LogoTwitter,
} from "react-ionicons";
import "./navbar.css";
import logo from "../../assets/bayc-logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <>
    <p>
      <a href="#buy-an-ape">BUY AN APE</a>
    </p>
    <p>
      <a href="#roadmap">ROADMAP</a>
    </p>
    <p>
      <a href="#team">TEAM</a>
    </p>
    <p>
      <a href="#gallery">GALLERY</a>
    </p>
    <p>
      <a href="#provenance">PROVENANCE</a>
    </p>
    <p>
      <a href="#members">MEMBERS</a>
    </p>
  </>
);

const Navbar = () => {
  const [dropMenu, setDropMenu] = useState(false);
  return (
    <div className="bayc__navbar">
      <div className="bayc__navbar-logo_container">
        <img src={logo} alt="logo" />
      </div>
      <div className="bayc__navbar-outer-container">
        <div className="bayc__navbar-links_container">
          <Menu />
        </div>
        <div className="bayc__navbar-icons">
          <a>
            <LogoYoutube
              color={"#fff"}
              title={"yt"}
              height="15px"
              width="15px"
            />
          </a>
          <a>
            <LogoInstagram
              color={"#fff"}
              title={"ig"}
              height="15px"
              width="15px"
            />
          </a>
          <a>
            <LogoDiscord
              color={"#fff"}
              title={"dc"}
              height="15px"
              width="15px"
            />
          </a>
          <a>
            <LogoTwitter
              color={"#fff"}
              title={"tw"}
              height="15px"
              width="15px"
            />
          </a>
        </div>
      </div>

      <div className="bayc__navbar-hambMenu">
        {dropMenu ? (
          <RiCloseLine
            color="#fff"
            size={30}
            onClick={() => setDropMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={30}
            onClick={() => setDropMenu(true)}
          />
        )}
        {dropMenu && (
          <div className="bayc__navbar-dropmenu_container">
            <Menu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
