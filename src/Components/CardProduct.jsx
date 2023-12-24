import React from "react";
import SaleBtn from "./SaleBtn";
import { FaShoppingBasket, FaEye } from "react-icons/fa";

function CardProduct({ span, image, content, price, rating }) {
  return (
    <div>
      <SaleBtn />
      <div className="icons-product-card-section">
        <FaShoppingBasket  className="shop-icon-card-second-section" />

        <FaEye className="shop-icon-card-second-section" />
      </div>

      <div>
        <img className="img-product-cart" src={image} alt="" />
      </div>
      <span>{"✰".repeat(rating)}</span>
      <div>
        <h2 className="content-card-box"> {content}</h2>
      </div>
      <span className="line-through">${span}</span>
      <span>${price}</span>
    </div>
  );
}

export default CardProduct;
