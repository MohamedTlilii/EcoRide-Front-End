import React from "react";
import "./Style.css";

function ButtonCard({ text }) {
  return (
    <div>
      <button className="btn-cart">{text}</button>
    </div>
  );
}

export default ButtonCard;
