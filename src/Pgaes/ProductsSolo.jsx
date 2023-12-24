import React from "react";
import SaleBtn from "../Components/SaleBtn";
import ButtonCard from "../Components/ButtonCard";

function ProductsSolo({ span, image, content, price, lorem }) {
  return (
    <div>
      <SaleBtn />
      <img className="img-product-cart" src={image} alt="" />
      <h2 style={{ color: "black" }} className="content-card-box">
        {" "}
        {content}
      </h2>
      <span className="line-through">${span}</span>
      <span>${price}</span>
      <p>{lorem}</p>
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
