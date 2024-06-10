import React from "react";
import "./BreadCrums.css";
import ArrowIcon from "../Assets/breadcrum_arrow.png";

function BreadCrums(props) {
  const { product } = props;
  return (
    <div className="bread-crums">
      Home <img src={ArrowIcon} alt="" />
      Shop <img src={ArrowIcon} alt="" /> {product.category}
      <img src={ArrowIcon} alt="" /> {product.name}
    </div>
  );
}

export default BreadCrums;
