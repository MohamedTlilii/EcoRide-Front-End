import React from "react";
import ButtonCard from "../Btn/ButtonCard";
import { Link } from "react-router-dom";
import "./style.css";

function Box() {
  return (
    <div className="box-last-section">
      <div className="box-box">
        <h5>$750</h5>

        <h2 className="box-titlle-section">Practico Z50 Exclusive</h2>

        <p style={{ width: "550px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida.
        </p>
        <Link to={"electricscooters"}>
          <ButtonCard text={"SHOP NOW"} />
        </Link>
      </div>
    </div>
  );
}

export default Box;
