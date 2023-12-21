import React from "react";

function CardKm({ text, km, content }) {
  return (
    <div className="card-km">
      <h4>{text}</h4>
      <span >{km}</span>
      <p>{content}</p>
    </div>
  );
}

export default CardKm;
