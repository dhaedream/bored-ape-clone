import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <div className="bayc__footer">
      <div className="bayc__footer-form_container">
        <form>
          <label>
            <p>GET ON THE LIST</p>
            <input type="text" name="name" value="Email Address" />
          </label>
          <input type="submit" value="->" />
        </form>
      </div>
      <div className="bayc__footer-logo_container"></div>
      <div className="bayc__footer-links_container"></div>
    </div>
  );
};

export default Footer;