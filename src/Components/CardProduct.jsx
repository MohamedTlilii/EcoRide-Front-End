import React from "react";
import SaleBtn from "./SaleBtn";

function CardProduct({ span, image, content, price, rating }) {
  return (
    <div>
      <SaleBtn />

      <div>
        <img style={{ width: "300", height: "394" }} src={image} alt="" />
      </div>
      <span>{"✰".repeat(rating)}</span>
      <div>
        <h2> {content}</h2>
      </div>
      <span>{price}</span>
    </div>
  );
}

export default CardProduct;
