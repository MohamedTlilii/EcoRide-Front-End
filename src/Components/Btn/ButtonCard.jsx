import React from "react";
import "./Style.css";

function ButtonCard({ text, fn }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          fn && fn();
        }}
        className="btn-cart"
        
      >
        {text}
      </button>
    </div>
  );
}

export default ButtonCard;
