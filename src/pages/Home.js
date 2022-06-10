import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../__mockup/product";

const Home = () => {
  return (
    <div>
      <img />
      {/* banner */}
      <div>
        List product
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
