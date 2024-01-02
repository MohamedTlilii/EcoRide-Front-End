import React from "react";
import SaleBtn from "./SaleBtn";
import { FaShoppingBasket, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function CardProduct({ span, image, content, price, rating, id }) {
  return (
    <div className="product-container">
      <SaleBtn />
      <div
      className="icons-product-card-section"
      >
        <FaShoppingBasket
          size={20}
          className="shop-icon-card-second-section"
        />
        <FaEye
        size={20}
        // className="shop-icon-card-second-section"
        />
      </div>

      <div  className="my-product-card">
        <Link to={`/product/${id}`}>
          <img className="img-product-cart" src={image} alt="" />
        </Link>
      </div>
      <span>{"✰".repeat(rating)}</span>
      <div>
        <Link to={`/product/${id}`}>
          <h2 style={{ color: "black" }} className="content-card-box">
            {" "}
            {content}
          </h2>
        </Link>
      </div>
      <span className="line-through">${span}</span>
      <span className="line-through-two">${price}</span>
    </div>
  );
}

export default CardProduct;
