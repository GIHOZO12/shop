import React, { useContext } from "react";
import "./ProductDisplay.css";
import startIcon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { shopContext } from "../../Context/ShopContext";

function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(shopContext);

  return (
    <div className="product-display">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productDisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-start">
          <img src={startIcon} alt="" />
          <img src={startIcon} alt="" />
          <img src={startIcon} alt="" />
          <img src={startIcon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(2222)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-lod">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-proice-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          a lightweight, usually knitted,pullover shirt, close-fitting and a
          lightweight, usually knitted,pullover shirt, close-fitting and
        </div>
        <div className="productdisplay-rigth-size">
          <h1>Select size</h1>
          <div className="productdisplay-right-size">
            <div>small</div>
            <div> mediam</div>
            <div>large</div>
            <div>xl</div>
            <div>xxl</div>
          </div>
          <button
            onClick={() => {
              addToCart(product.id);
            }}
          >
            Add to cart
          </button>
          <p className="productdisplay-right-category">
            <span>Category:</span>Women ,T-shit , crop-top
          </p>
          <p className="productdisplay-right-category">
            <span>Tags:</span>Modern ,latest , crop-top
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
