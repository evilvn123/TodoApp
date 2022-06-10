import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../__mockup/product";
// import "../styles/ProductDetail.css";

const ProductDetail = () => {
  const { productId } = useParams();

  const currentProduct = products.find(
    (item) => item.id === parseInt(productId)
  );

  return <div>{productId}</div>;
};

export default ProductDetail;
