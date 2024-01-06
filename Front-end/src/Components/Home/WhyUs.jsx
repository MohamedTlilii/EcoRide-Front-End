import React from "react";
import "./style.css";

function WhyUs({ icon, title, text }) {
  return (
    <div className="card-why-use">
      <figure className="why-us-section-card-icon">{icon} </figure>
      <h4 className="why-us-section-card-title">{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default WhyUs;
