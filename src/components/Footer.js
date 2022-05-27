import React from "react";
import "../styles/Footer.css";
import vans from "../assets/vans.png";
import nike from "../assets/nike.jfif";
import NB from "../assets/NB.png";
import puma from "../assets/puma.png";

const Footer = () => {
  const brands = [vans, nike, NB, puma];
  return (
    <footer>
      <div className="information">
        <div className="contact">
          <h4 className="title">Contact information</h4>
          <p>Contotto telefonico</p>
          <p className="mobile">
            <strong>081-0118919</strong>(lineafissa)
          </p>
          <p className="mobile">
            <strong>391-754-69-87</strong>(mobile)
          </p>
        </div>
        <div className="support"></div>
        <div className="policy"></div>
        <div className="follow"></div>
      </div>
      <div className="brands">
        {brands.map((item, index) => (
          <img key={index} src={item} alt={"shoe brand"} />
        ))}
      </div>
      <div className="copy-right"></div>
    </footer>
  );
};

export default Footer;
