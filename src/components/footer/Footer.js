import React from "react";
import logo from "../../images/footerLogo.png";
import { Link } from "react-router-dom";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_top">
        <div className="footer_top_left">
          <img src={logo} alt="" />
        </div>
        <div className="footer_top_right">
          <h3>About us</h3>
          <p>
            Stay connected with us through our social media channels and never
            miss an update. Reach out via email or phone for any inquiries.
            We’re here to help your business succeed online.
          </p>
        </div>
      </div>
      <div className="footer_bottom">
        <p>© 2024 Scared2compile All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
