import React from "react";
import "./NewLetter.css";

function Newletter() {
  return (
    <div className="newletter">
      <h1>Get exclusive offers on your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="eamil" placeholder="your Email id" />
        <button>Subcribe</button>
      </div>
    </div>
  );
}

export default Newletter;
