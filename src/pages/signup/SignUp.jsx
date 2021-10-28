import React, { useContext, useState } from "react";
import "../../sass/pages/login.scss";
import { Link } from "react-router-dom";
// import signupLogic from "../../componenets/signup/signupLogic";
// import signupValidation from "../../componenets/signup/signupValidation";
// import { useHistory } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

export const SignUp = () => {
  //   let history = useHistory()
  //   let firebaseContext = useContext(AuthContext);
  //   const [firebaseError, setFirebaseError] = useState(null);

  //   const formSubmitted = async () => {
  //     try {
  //       let response = await firebaseContext.signup(
  //         inputValues.useremail,
  //         inputValues.userpassword
  //       );
  //       if (response) history.replace("/profile", inputValues);
  //     } catch (err) {
  //       console.error("Authentication Error", err);
  //       setFirebaseError(err.message);
  //     }
  //   };

  //   const { handleInput, inputValues, handleSubmit, errors } = signupLogic(
  //     formSubmitted,
  //     signupValidation
  //   );

  return (
    <div className="login-container signup">
      <div className="login_form-container">
        <h1 className="form-title">Sign Up</h1>
        <form className="form">
          <label htmlFor="userEmail" className="form-label email">
            New Email
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
          {/* {firebaseError && (
            <p className="error-message">
              <span id="Asterisk">*</span>
              {firebaseError}
            </p>
          )} */}
          <label htmlFor="userpassword" className="form-label password">
            New Password
          </label>
          <input
            type="text"
            name="userpassword"
            className="form-input"
            placeholder="Enter your password"
            // onChange={handleInput}
            // values={inputValues.userpassword}
          />
          {/* {errors.userpassword && (
            <p className="error-message">
              <span id="Asterisk">*</span>
              {errors.userpassword}
            </p>
          )} */}
          <label htmlFor="userpassword" className="form-label password">
            New Password Confirmation
          </label>
          <input
            type="text"
            name="userpasswordconfirmation"
            className="form-input"
            placeholder="Enter password confirmation"
            // onChange={handleInput}
            // values={inputValues.userpasswordconfirmation}
          />
          {/* {errors.userpasswordconfirmation && (
            <p className="error-message">
              <span id="Asterisk">*</span>
              {errors.userpasswordconfirmation}
            </p>
          )} */}

          <button className="form-input-btn" type="submit">
            Register
          </button>
        </form>
        <Link to="/" className="cancel-link">
          Cancel
        </Link>
      </div>
    </div>
  );
};
