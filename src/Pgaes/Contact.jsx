import React from "react";
import LandingPageFooter from "../Components/LandingPageFooter";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaHandshake,FaQuestionCircle  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import ButtonCard from "../Components/ButtonCard";
// import Slides from "../Slides/Slides";
function Contact() {
  return (
    <div className="contact-parent">
      <div className="contact-section">
        <div className="contact-content">
          <h1>Contact us</h1>
          <h4>
            If you have any questions, please feel free to get in touch with us,
            we’ll get back to you shortly.
          </h4>
        </div>
        <div className="contact-details">
          <h6>CONTACT DETAILS</h6>

          <b className="contact-details-element">E:</b>
          <Link to="">
            <span className="contact-details-element"> contact@info.com</span>
          </Link>
          <br />
          <b className="contact-element">P:</b>
          <span className="contact-element">+1 234 567 890</span>
          <br />
          <b className="contact-element">A:</b>
          <span className="contact-element">
            123 Fifth Avenue, New York,NY 10160
          </span>
        </div>
        <div className="social-media-links">
          <h6 className="">FOLLOW US</h6>
          <FaFacebook className="fb-logo" />
          <AiFillTwitterCircle className="twiter-logo" />
          <FaSquareYoutube className="youtube-logo" />
        </div>
      </div>
      <div className="links-section">
        <h2>Useful Links</h2>
        <div className="useful-links">
          <div className="useful-link-one">
            <FaHandshake className="partnership-logo" style={{fontSize:"32px"}} />
            <h4>Partnerships</h4>
            <p>Interested in a partnership with us?</p>
            <ButtonCard   text={"APPLY HERE"}/>
          </div>

          <div className="useful-link-one">
            <FaQuestionCircle className="partnership-logo"  style={{fontSize:"32px"}} />
            <h4>FAQ</h4>
            <p>Most questions can be answered here.</p>
            <ButtonCard    text={"GO TO FAQ"}/>
          </div>

          
          <div className="useful-link-one">
            <FaLocationDot  className="partnership-logo" style={{fontSize:"32px"}} />
            <h4>Store Locations</h4>
            <p>Find your nearest Electric Scooter store.</p>
            <ButtonCard   text={"FIND STORE"}/>
          </div>


        </div>
        
      </div>

      <div className="footer">
        <LandingPageFooter/>
        <div className="last-footer">
        <p >Copyright © 2023 Electric Scooter | Powered by Electric Scooter</p>
        <img src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/payment-icons.png" style={{width:"246px", height:"20px"}} alt="" />
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
