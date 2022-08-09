import React from "react";
import CartItem from "../components/CartItem";
import "../styles/Cart.css";

const Cart = () => {
  const currentCart = localStorage.getItem("cart");
  const cartArr = JSON.parse(currentCart) || [];

  return (
    <div className="cart">
      <h3>Cart</h3>
      {cartArr.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cart;
