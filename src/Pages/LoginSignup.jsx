import React from "react";
import "./css/LoginSignup.css";

function LoginSignup() {
  return (
    <div className="loginSignup">
      <div className="loginsignup-container">
        <h1>Sigup</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="email addres" />
          <input type="password" placeholder="password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>{" "}
        </p>
        <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing , i agree to terms of use & privacy plocices </p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
