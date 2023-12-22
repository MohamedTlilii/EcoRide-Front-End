import React from "react";
import CardKm from "../Components/CardKm";
import ButtonCard from "../Components/ButtonCard";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareYoutube } from "react-icons/fa6";

function LandingPage(props) {
  return (
    <div className="hero-section-first">
      <div className="hero-section">
        <div className="hero-section-content">
          <h1>Libero X250</h1>
          <h4 className="hero-titlle">250 Watt Electric Scooter</h4>
          <h5 className="hero-second-title">Informations:</h5>
          <div className="card-km-info">
            <CardKm text={30} km={"km"} content={"BATTERY"} />
            <CardKm text={"13,5"} km={"kg"} content={"WEIGHT"} />
            <CardKm text={25} km={"km/h"} content={"SPEED"} />
          </div>
          <div className="add-cart-section">
            <span>$</span> 750.000
            <span className="add-cart-span">
              <ButtonCard text={"ADD TO CART"} />
            </span>
          </div>
        </div>

        <div className="scoter-hero-section">
          <img
            style={{ width: "658px", height: "577px" }}
            src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/scooter-01.png"
            alt=""
          />
        </div>
        <div className="last-section-hero">
          <h4 className="last-section-title">Description</h4>
          <p className="last-section-titlle-p"> 
            The Fully Loaded Libero x250 is a High Performance, Extremely
            Durable, High Speed, Lightweight Electric Scooter with a Huge
            Battery
          </p>
          <h6 className="last-section-logos-titlle">SHARE:</h6>
          <FaFacebook className="fb-logo" />
          <AiFillTwitterCircle className="twiter-logo" />
          <FaSquareYoutube className="youtube-logo" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
