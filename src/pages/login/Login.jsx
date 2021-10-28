import React from "react";
import "../../sass/pages/login.scss";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="login-container">
      <div className="login_form-container">
        <h1 className="form-title">Log In</h1>
        <form className="form">
          <label htmlFor="userEmail" className="form-label email">
            Email
          </label>
          <input
            name="useremail"
            className="form-input"
            placeholder="Enter your email"
            // onChange={handleInput}
            // values={inputValues.useremail}
          />

          {/* {errors.useremail && (
            <p className="error-message">
            <span id="Asterisk">*</span>
              {errors.useremail}
              </p>
            )} */}

          <label htmlFor="userpassword" className="form-label password">
            Password
          </label>
          <input
            type="text"
            name="userpassword"
            className="form-input"
            placeholder="Enter your password"
            // onChange={handleInput}
            // values={inputValues.userpassword}
          />
          {/* {firebaseError && (
            <p className="error-message">
            <span id="Asterisk">*</span>
            {firebaseError}
            </p>
          )} */}

          {/* {errors.userpassword && (
            <p className="error-message">
              <span id="Asterisk">*</span>
              {errors.userpassword}
              </p>
            )} */}

          <button className="form-input-btn" type="submit">
            Login
          </button>
          <p>
            <Link to="/reset-password" className="forgot-password">
              Forgot Password
            </Link>
          </p>
        </form>
        <p className="need-an-account">
          Need an account?{" "}
          <span>
            <Link to="/sign-up" className="sign-up">
              SignUp
            </Link>
          </span>
        </p>
        <Link to="/" className="cancel-link">
          Cancel
        </Link>
      </div>
    </div>
  );
};
