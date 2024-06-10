import React, { useContext } from "react";
import { shopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrums from "../Components/BreadCrums/BreadCrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriiptionBox from "../Components/DescriptionBox/DescriiptionBox";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";

const Product = () => {
  const { all_product } = useContext(shopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
      <DescriiptionBox />
      <RelatedProduct />
    </div>
  );
};

export default Product;
