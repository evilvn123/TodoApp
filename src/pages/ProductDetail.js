import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../__mockup/product";
// import "../styles/ProductDetail.css";

const ProductDetail = () => {
  const { productId } = useParams();

  return <div>{productId}</div>;
};

export default ProductDetail;
