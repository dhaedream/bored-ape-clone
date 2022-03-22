import React from "react";
import "./footer.css";

import { ArrowForwardOutline, LogoYoutube,
  LogoInstagram,
  LogoDiscord,
  LogoTwitter, } from 'react-ionicons';
import footerApe from "../../assets/bayc-footer.png";

const Footer = () => {
  return (
    <div className="bayc__footer">
      <div className="bayc__footer-form_container">
        <form>
          <label>
            <p className="bayc__footer_form-p">GET ON THE LIST</p>
            <div className="bayc__footer_form-input__row">
            <input className="bayc__footer_form-input" type="text" name="name" value="Email Address" />
            <div className="bayc__footer_form-arrow__button">
          <ArrowForwardOutline
            color={'#00000'} 
            title="arrow"
            height="25px"
            width="25px"
          />
         </div>
          </div>
          </label>     
        </form>
      </div>
      <div className="bayc__footer-logo_container">
        <img className="bayc__footer-ape_logo" src={footerApe} alt="footer-ape" />
      </div>
      <div className="bayc__footer-links_container">
        <div className="bayc__footer-logos">
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
        <div className="bayc__footer-links_paras">
          <p>© 2021 Yuga Labs LLC</p>
          <p>BAYC Terms & Conditions</p>
          <p>MAYC Terms & Conditions</p>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;