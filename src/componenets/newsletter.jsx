import React from "react";
import "../sass/components/newsletter.scss";
const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h1 className="newsletter-title">Newsletter</h1>
      <h2 className="newsletter-sentence">
        Get timely updates from your favorite products.
      </h2>
      <div className="newsletter-input-wrapper">
        <input type="email" className="newsletter-input" placeholder="Your email"/>
        <button className="newsletter-button"><i className="far fa-paper-plane"></i></button>
      </div>
    </div>
  );
};

export default Newsletter;
