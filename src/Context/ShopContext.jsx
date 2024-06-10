import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";

export const shopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   for (let index = 0; index < all_product.length + 1; index++) {
//     cart[index] = 0;
//   }
//   return cart;
// };
const ShopContextProvider = (props) => {
  //   const [cartItem, setCartItems] = useState(getDefaultCart);
  //   const AddToCart = (itemId) => {
  //     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  //     console.log(cartItem);
  //   };
  //   const removeFromCart = (itemId) => {
  //     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  //   };
  // const getTotalCartAmount=()=>{
  //     let totalAmount =0;
  //     for(const item in cartItems)
  //       {
  //         if(cartItem[item]>0)
  //           {
  //             let itemInfo =all_product.find((product)=> product.id ===Number(item))
  //             totalAmount+=itemInfo.new_price *cartItems[item];
  //           }

  //       }
  //       return totalAmount
  // }
  // const getTotalCartAmounts =()=>{
  //   let totalItem=0;
  //   for(const item in cartItems){
  //     if(cartItems[item]>0)
  //       {
  //         totalItem+=cartItems[item];
  //       }

  //   }
  //   return totalItem
  // }
  const contextValue = { all_product };

  console.log("all_product:", all_product);

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
