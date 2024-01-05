import React from "react";
import "./style.css";

function CardKm({ text, km, content }) {
  return (
    <div  className="card-km">
      <h4 style={{fontWeight:"700",fontSize:"25px"}}>{text}</h4>
      <span style={{fontWeight:"900" ,fontSize:"20px"}} >{km}</span>
      <p className="card-km-p" style={{fontWeight:"100" ,fontSize:"12px"}}>{content}</p>
    </div>
  );
}

export default CardKm;
