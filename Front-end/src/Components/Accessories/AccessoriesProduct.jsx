import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
function AccessoriesProduct({ image, content, price, rating, id }) {
  return (
    <div>
      <div className="my-product-card">
        <Link to={`/accessories/${id}`}>
          <img className="electric-scooter-products" src={image} alt="" />
        </Link>
      </div>
      <span>{"✰".repeat(rating)}</span>
      <div>
        <Link to={`/accessories/${id}`}>
          <h2
            style={{ color: "black" }}
            className="electric-scooter-products-title"
          >
            {" "}
            {content}
          </h2>
        </Link>
      </div>

      <span className="electric-scooter-products-price">{price}</span>
      <span>EGP</span>
    </div>
  );
}

export default AccessoriesProduct;
