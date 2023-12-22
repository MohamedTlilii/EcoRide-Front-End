import React from "react";

function CardProduct({ span, img }) {
  return (
    <div>
      <div>
        <span>{span}</span>
      </div>
      <div>
      <img src={img} alt="" />
      </div>
    </div>
  );
}

export default CardProduct;
