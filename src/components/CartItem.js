import React from "react";
import "../styles/CartItem.css";

const CartItem = ({ item }) => {
  return (
    <div className="item">
      <img className="image" src={item.image} alt={item.name} />
      <span className="name">{item.name}</span>
      <span className="price">{+item.price} VND</span>

      <div className="quantity">
        <button>-</button>
        <input type="text" value={item.quantity} />
        <button>+</button>
      </div>

      <span className="total">{+item.price * item.quantity} VND</span>
    </div>
  );
};

export default CartItem;
