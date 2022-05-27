import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <ul className="menu">
      <Link to="/">
        <li className="item">Home</li>
      </Link>
      <Link to="/about">
        <li className="item">Product</li>
      </Link>
      <Link className="last-item" to="/dashboard">
        <li className="item">Signin</li>
      </Link>
    </ul>
  );
};

export default Navbar;
