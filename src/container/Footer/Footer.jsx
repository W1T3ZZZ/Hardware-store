import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
// import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    {/* <FooterOverlay />
    <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Obelicev venac 4a, Nis</p>
        <p className="p__opensans">060456331</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gvozdjara} alt="footer_logo" />
        <p className="p__opensans">
          The best way to find yourself is to lose yourself in the service of
          others
        </p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Mon - Sun: 08:00 - 24:00</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2024 Hardware Store. All rights reserved</p>
    </div>
  </div>
);

export default Footer;
