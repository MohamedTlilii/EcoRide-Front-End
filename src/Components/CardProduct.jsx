import React from "react";
import SaleBtn from "./SaleBtn";
import { FaShoppingBasket, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function CardProduct({ span, image, content, price, rating }) {
  return (
    <div>
      <SaleBtn />
      <div className="icons-product-card-section">
        <FaShoppingBasket className="shop-icon-card-second-section" />

        <FaEye className="shop-icon-card-second-section" />
      </div>

      <div>
        <Link to="product">
          <img className="img-product-cart" src={image} alt="" />
        </Link>
      </div>
      <span>{"✰".repeat(rating)}</span>
      <div>
      <Link to="product">
        <h2 style={{ color:"black"}} className="content-card-box"> {content}</h2>
        </Link>
      </div>
      <span className="line-through">${span}</span>
      <span className="line-through-two">${price}</span>
    </div>
  );
}

export default CardProduct;
