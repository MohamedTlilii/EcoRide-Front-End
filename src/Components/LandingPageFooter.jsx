import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareYoutube } from "react-icons/fa6";
import ButtonCard from "./ButtonCard";
import { Link } from "react-router-dom";
function LandingPageFooter() {
  return (
    <div className="footer-section">
      <div className="footer-part-one">
        <img src="/assets/home/logo-footer.png" alt="" />
        <p>
          Duis aute irure dolor in reprehen derit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
        <FaFacebook className="fb-logo" />
        <AiFillTwitterCircle className="twiter-logo" />
        <FaSquareYoutube className="youtube-logo" />
      </div>
      <div className="footer-part-two">
        <div className="contact-footer">
          <h5>Contact us</h5>
        </div>

        <b>E:</b>
        <Link to="">
          <span >info@example.com</span>
        </Link>
        <br />
        <b>P:</b>
        <span>+1 234 567 890</span>
        <br />
        <b>A:</b>
        <span>123 Fifth Avenue, New York,</span>
        <br />
        <span>NY 10160</span>
      </div>
      <div className="footer-part-third">
        <div className="contact-footer">
          <h5>Useful links</h5>
        </div>

        <div className="all-shops">
       
        <span>Electric Scooters</span>
        <br />
        <span>Accessories</span>
        <br />
        <span>About</span>
        <br />
        <span>Contact</span>
        </div>
      </div>
      <div className="footer-part-four">
        <div className="contact-footer">
          <h5>Sign up for special offers</h5>
        </div>

        <label htmlFor="">
          <input
            className="input-footer"
            type="text"
            placeholder="Email address"
            size={"250px"}
            
          />
        </label>
        <ButtonCard text={"SUBSCRIBE"} />
      </div>
    </div>
  );
}

export default LandingPageFooter;
