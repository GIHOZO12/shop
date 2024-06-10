import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../Assets/logo.png";
import Cart from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
// import { shopContext } from "../../Context/ShopContext";

function Navbar() {
  const [menu, setMenu] = useState("Shop");
  // const [getTotalCartAmount] =useContext(shopContext)
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="" />
        <p>Customer </p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/mens" style={{ textDecoration: "none" }}>
            {" "}
            Men
          </Link>{" "}
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/womens" style={{ textDecoration: "none" }}>
            Women
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids" style={{ textDecoration: "none" }}>
            {" "}
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="Login" style={{ textDecoration: "none" }}>
          <button>Login</button>
        </Link>
        <Link to="cart" style={{ textDecoration: "none" }}>
          <img src={Cart} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
