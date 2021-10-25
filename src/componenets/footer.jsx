import React from "react";
import { Router, Link } from "react-router-dom";
import "../sass/components/footer.scss";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-start-container">
        <h1 className="footer-title">Babber</h1>
        <p className="footer-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </p>
        <div className="social">
          <img
            alt="pinterest"
            src="https://img.icons8.com/color/48/000000/linkedin.png"
          />
          <img
            alt="pinterest"
            src="https://img.icons8.com/color/48/000000/facebook-new.png"
          />
          <img
            alt="pinterest"
            src="https://img.icons8.com/color/48/000000/pinterest--v3.png"
          />
        </div>
      </div>
      <div className="footer-center-container">
        <h1 className="usefull-links-title footer-title">usefull links</h1>
        <div className="usefull-link-wrapper">
          <Link to="/Home" className="home-link">
            Home
          </Link>
          <Link to="/Home" className="fashion-link">
            Man Fashion
          </Link>
          <Link to="/Home" className="accessories">
            Accessories
          </Link>
          <Link to="/Home" className="order-tracking-link">
            Order Tracking
          </Link>
          <Link to="/Home" className="wishlist-link">
            Wishlist
          </Link>
          <Link to="/Home" className="woman-fashion-link">
            Woman Fashion
          </Link>
          <Link to="/Home" className="terms-link">
            Terms
          </Link>
          <Link to="/Home" className="myaccount-link">
            My Account
          </Link>
        </div>
      </div>
      <div className="footer-end-container">
        <h1 className="footer-contact-title footer-title">Contact</h1>
        <div className="address-wrapper contact-detail">
          <img
            className="footer-icon"
            alt="pinterest"
            src="https://img.icons8.com/ios-filled/50/000000/pointer.png"
          />
          <span className="contact-des">Haia Hashfet beer Sheva</span>
        </div>
        <div className="contact-wrapper contact-detail">
          <img
            className="footer-icon"
            alt="pinterest"
            src="https://img.icons8.com/external-sbts2018-mixed-sbts2018/58/000000/external-contact-social-media-basic-1-sbts2018-mixed-sbts2018.png"
          />
          <span className="contact-des">+972 54-879-898</span>
        </div>
        <div className="write-us-email-container contact-detail ">
          <img
            className="footer-icon"
            alt="pinterest"
            src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-message-contact-flatart-icons-outline-flatarticons.png"
          />
          <span className="contact-des">Babber@support.com</span>
        </div>
        <div className="credits">
          <img
            className="footer-icon-credit"
            alt="pinterest"
            src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
          />
          <img
            className="footer-icon-credit"
            alt="pinterest"
            src="https://img.icons8.com/cotton/64/000000/paypal--v1.png"
          />
          <img
            className="footer-icon-credit"
            alt="pinterest"
            src="https://img.icons8.com/color/48/000000/visa.png"
          />
        </div>
      </div>
    </div>
  );
};
