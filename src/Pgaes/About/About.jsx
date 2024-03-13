import React from "react";
// import LandingPageFooter from "../../Components/Footer/Footer";
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
          style={{ width: "570px", height: "670px" }}
          className="about-img"
          src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/281488956_516286210216782_7056601783186434710_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CHSKfq9P9k8AX-RVagP&_nc_ht=scontent.ftun16-1.fna&oh=00_AfA3dJKR6zDuqxFxOY3swmciMZCfoU86DspDIRh5eMqHeg&oe=65F5DFD6"
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
