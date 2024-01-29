import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
function AccessoriesProduct({ image, title, price, id, imageUrls }) {
  return (
    <div>
      <div className="my-product-card">
        <Link to={`/accessories/${id}`}>
          <img
            className="electric-scooter-products"
            src={imageUrls[0]}
            alt=""
          />
        </Link>
      </div>
      {/* <span>{"✰".repeat(rating)}</span> */}
      <div>
        <Link to={`/accessories/${id}`}>
          <h2
            style={{ color: "black" }}
            className="electric-scooter-products-title"
          >
            {title}
          </h2>
        </Link>
      </div>

      <span className="electric-scooter-products-price">{price}</span>
      <span>EGP</span>
    </div>
  );
}

export default AccessoriesProduct;
