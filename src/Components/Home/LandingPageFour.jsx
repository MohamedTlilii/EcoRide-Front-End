import React from "react";
import { FaQuoteRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./style.css";

function LandingPageFour() {
  return (
    <div>
      <div className="four-section">
        <div className="four-section-content">
          <Link to="/" className="four-section-content-box">
            <FaQuoteRight className="section-four-icon" />
          </Link>

          <h4>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.”
          </h4>
          <img
            src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/signature-01.png"
            alt=""
          />
          <p>MARIA OLIVER</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPageFour;
