import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <Link className="last-item" to="/signin">
        <li className="item">
          <FontAwesomeIcon icon={faUser} />
        </li>
      </Link>
    </ul>
  );
};

export default Navbar;
