import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function CardProduct({ imageUrls, title, price, _id }) {
  return (
    <div className="product-container">
      <div className="my-product-card">
        <Link to={`/product/${_id}`}>
          <img
            style={{ width: "450px" }}
            className="img-product-cart"
            src={imageUrls[0]}
            alt=""
          />
        </Link>
      </div>

      <div>
        <Link to={`/product/${_id}`}>
          <h2 style={{ color: "black" }} className="content-card-box">
            {" "}
            {title}
          </h2>
        </Link>
      </div>

      <span className="line-through-two">{price}TND</span>
    </div>
  );
}

export default CardProduct;
