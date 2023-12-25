import React from "react";
import SaleBtn from "../Components/SaleBtn";
import ButtonCard from "../Components/ButtonCard";
import { useParams } from "react-router-dom";
function ProductsSolo({ products }) {
  let { id } = useParams();
  let product = products.find((product) => product.id === id);

  return (
    <div>
      <SaleBtn />
      <img className="img-product-cart" src={product.image} alt="" />
      <h2 style={{ color: "black" }} className="content-card-box">
        {" "}
        {product.content}
      </h2>
      <span className="line-through">${}</span>
      <span>${product.price}</span>
      <p>{product.content}</p>
      <div className="quantity buttons_added">
        <label className="screen-reader-text" htmlFor="minus_qty">
          -
        </label>
        <label
          className="screen-reader-text"
          htmlFor="quantity_65882f9b538de"
        ></label>
        <input style={{ width: "25px" }}></input>
        <label className="screen-reader-text" htmlFor="plus_qty">
          +
        </label>
      </div>
      <ButtonCard />
      <legend>Guaranteed Safe Checkout</legend>
      <img
        src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/payment-icons.png"
        style={{ width: "246px", height: "20px" }}
        alt=""
      />
      <span> ✔️No-Risk Money Back Guarantee!</span>
      <span> ✔️No Hassle Refunds</span>
      <span> ✔️Secure Payments</span>
    </div>
  );
}

export default ProductsSolo;
