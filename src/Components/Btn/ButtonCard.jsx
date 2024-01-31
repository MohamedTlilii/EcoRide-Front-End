import React from "react";
import "./Style.css";

function ButtonCard({ text, fn }) {
  return (
    <div>
      <button
        onClick={() => {
          fn();
        }}
        className="btn-cart"
      >
        {text}
      </button>
    </div>
  );
}

export default ButtonCard;
