import React from "react";
import "./Popular.css";
import Data_product from "../Assets/data";
// import data_product from "../Assets/data";
import Item from "../Items/Item";

function Popular() {
  return (
    <div className="popular">
      <h1>Popular In women</h1>
      <hr />
      <div className="popular-item">
        {Data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
}

export default Popular;
