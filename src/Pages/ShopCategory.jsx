import React, { useContext } from "react";
import "./css/ShopCategory.css";
import { shopContext } from "../Context/ShopContext";
import Dropdown from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Items/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(shopContext);

  return (
    <div className="Shop-category">
      <img className="shop-category-banner" src={props.banner} alt="" />
      <div className="shopCateogry-indexSort">
        <p>
          <span>Showing 1-12</span> out of products
        </p>
        <div className="shopCateogry-sort">
          sort by <img src={Dropdown} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_item={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadmorae">Explore more</div>
    </div>
  );
};

export default ShopCategory;
