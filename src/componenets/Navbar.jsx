import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/cart">
          <i className="fas fa-shopping-cart"></i>
        </Link>
        <Link to="/login">
          <h2 className="langage nav">sign in</h2>
        </Link>
        <Link to="/sign-up">
          <h2 className="langage nav">register</h2>
        </Link>
      </div>
    </div>
  );
};
