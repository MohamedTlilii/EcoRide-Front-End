import React from "react";
import ButtonCard from "./ButtonCard";

function Box() {
  return (
    <div className="box-last-section">
      <div className="box-box">
       
        <h5 >$650</h5>
        
          <h2 className="box-titlle-section">SilverPath Y100</h2>
        
        <p style={{ width: "550px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida.
        </p>
        <ButtonCard text={"SHOP NOW"} />
      </div>
    </div>
  );
}

export default Box;
