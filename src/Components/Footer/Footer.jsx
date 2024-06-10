import React from "react";
import "./Footer.css";
import FooterLogo from "../Assets/logo_big.png";
import Instagram from "../Assets/instagram_icon.png";
import Pintrest from "../Assets/pintester_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={FooterLogo} alt="" />
        <p>Shopper</p>
      </div>
      <ul className="footer-links">
        <li> Company</li>
        <li> Products</li>
        <li> Offices</li>
        <li> About</li>
        <li> Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={Instagram} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={Pintrest} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 -all Rigt reserved</p>
      </div>
    </div>
  );
}

export default Footer;
