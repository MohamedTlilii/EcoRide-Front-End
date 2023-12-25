import CardKm from "../Components/CardKm";
import ButtonCard from "../Components/ButtonCard";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareYoutube } from "react-icons/fa6";
import CardProduct from "../Components/CardProduct";

import Box from "../Components/Box";
import LandingPageAbout from "../Components/LandingPageAbout";
import LandingPageFour from "../Components/LandingPageFour";
import LandingPageWhy from "../Components/LandingPageWhy";
import LandingPageFooter from "../Components/LandingPageFooter";


function LandingPage({products}) {


  return (
    <div className="parent-div">
      <div className="hero-section">
        <div className="hero-section-content">
          <h1>Libero X250</h1>
          <h4  className="hero-titlle">250 Watt Electric Scooter</h4>
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
            src="/assets/home/scooter-01.png"
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

      <div className="product-section">
        <div className="products">
          {products.map((product, i) => (
            <CardProduct key={i} {...product} />
          ))}
        </div>
      </div>
      <LandingPageAbout />
      <div className="third-section">
        <div className="card-third-section">
          <img
            className="img-third-section"
            src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/scooter-02.png"
            alt=""
          />
          <figcaption>CITY</figcaption>
          <h1 className="titlle-third-section">Electric Scooter Z400</h1>
          <p className="price-third-section">$650 </p>
        </div>
      </div>
      <LandingPageFour  />
      <div className="section-five">
        <div className="content-five">
          <div className="section-five-content">
            <h1>Shop Electric Scooter Accessories</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <ButtonCard 
              className="content-five-btn"
              text={"SHOP ACCESSORIES"}
            />
          </div>

          <img
            src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/accessories-01.png"
            alt=""
          />
        </div>
      </div>
      <LandingPageWhy />
      <div className="silver-path-section">
        <Box />
      </div>
      <div className="footer">
        <LandingPageFooter/>
        <div className="last-footer">
        <p>Copyright © 2023 Electric Scooter | Powered by Electric Scooter</p>
        <img src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/payment-icons.png" style={{width:"246px", height:"20px"}} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
