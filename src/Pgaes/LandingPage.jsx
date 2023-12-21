import React from "react";
import CardKm from "../Components/CardKm";
import ButtonCard from "../Components/ButtonCard";

function LandingPage(props) {
  return (
    <div>
      <h1>Libero X250</h1>
      <h4>250 Watt Electric Scooter</h4>
      <h5>Informations:</h5>
      <div className="card-km-info">
        <CardKm text={30} km={"km"} content={"BATTERY"} />
        <CardKm text={"13,5"} km={"kg"} content={"WEIGHT"} />
        <CardKm className="card-km-info-third" text={25} km={"km/h"} content={"SPEED"} />
      </div>
      <span>$</span> 750.000
      <span><ButtonCard text={"ADD TO CART"}/></span>
    </div>
  );
}

export default LandingPage;
