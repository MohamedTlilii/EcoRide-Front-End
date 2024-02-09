import React from "react";
import LandingPageFooter from "../../Components/Footer/Footer";
import "./Style.css";
function About() {
  return (
    <div className="about-parent">
      <div className="about-section">
        <div className="about-content">
          <h1>About us</h1>
          <h3>
            The joy of easy and hassle free <br />
            travel using electric scooters made us dream about starting this
            business.
          </h3>
        </div>
      </div>
      <div className="about-section-two">
        <div className="about-section-two-content">
          <h6>A FEW WORDS</h6>
          <h2>About the founders</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            viverra lacus eget ornare hendrerit. Quisque tempus bibendum
            elementum. Donec eget urna nisi. In non nunc mauris. Suspendisse in
            sem sed lacus.
          </p>
          <p>
            Blandit at ornare nibh. Sed bibendum, metus vitae aliquet dignissim,
            sem lorem pretium ipsum.
          </p>
        </div>
        <img
          className="about-img"
          src="https://scooteregypt.com/wp-content/uploads/2022/11/about-01.jpg"
          alt=""
        />
      </div>
      <div className="about-section-third-container">
        <div className="about-section-third">
          <h6>WE VALUE OUR CLIENTS</h6>
          <h2>Customer service is at the core of our business</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            viverra lacus eget ornare hendrerit. Quisque tempus bibendum
            elementum. Donec eget urna nisi. In non nunc mauris. Suspendisse in
            sem sed lacus rhoncus blandit at ornare nibh. Sed bibendum, metus
            vitae aliquet dignissim, sem lorem pretium ipsum, sit amet cursus
            risus velit nec neque. Nam convallis.
          </p>
          <p>
            Ullamcorper dui nec pellentesque. Nam fringilla eros arcu, sed
            bibendum orci posuere non. Morbi eu lorem sapien. In pharetra, metus
            ac pulvinar pharetra.
          </p>
        </div>
      </div>
      <div className="about-section-four"></div>
    </div>
  );
}

export default About;
