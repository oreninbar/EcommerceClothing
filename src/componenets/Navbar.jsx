import React from "react";
import "../sass/components/navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="start-navbar">
        <h2 className="langage nav">EN</h2>
        <input type="text" className="nav-input" />
      </div>
      <h1 className="logo nav">BABBAR CLOTHES</h1>
      <div className="end-navbar">
        <i className="fas fa-shopping-cart"></i>
        <h2 className="langage nav">register</h2>
        <h2 className="langage nav">sign in</h2>
      </div>
    </div>
  );
};
