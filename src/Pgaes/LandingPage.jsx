import CardKm from "../Components/CardKm";
import ButtonCard from "../Components/ButtonCard";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareYoutube, FaQuoteRight } from "react-icons/fa6";
import CardProduct from "../Components/CardProduct";
import { useState } from "react";
import Data from "../Data";
import { Link } from "react-router-dom";
import WhyUs from "../Components/WhyUs";
import { CiDeliveryTruck, CiLocationArrow1 } from "react-icons/ci";
import { PiLockKey } from "react-icons/pi";
import Box from "../Components/Box";

function LandingPage() {
  const [products, setProducts] = useState(Data);
  // const [product, setProduct] = useState(Data);
  return (
    <div>
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
      <div className="about-section">
        <div className="about-section-content">
          <h6>ABOUT US</h6>
          <h2>
            If you’re looking for a brand new electric scooter, you’re in the
            right place
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
        </div>
      </div>
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
      <div className="four-section">
        <div className="four-section-content">
          <Link className="four-section-content-box" to="/">
            <FaQuoteRight />
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
      <div className="why-us-section">
        <div className="why-us-section-content">
          <h2>Why choose us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <div className="why-us-section-card">
            <div>
              <WhyUs
                icon={<CiDeliveryTruck style={{ color: "white" }} />}
                title={"Fast Delivery"}
                text={
                  "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur incididunt ut labore"
                }
              />
            </div>
            <div>
              <WhyUs
                icon={<CiLocationArrow1 style={{ color: "white" }} />}
                title={"Order Tracking"}
                text={
                  "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur incididunt ut labore"
                }
              />
            </div>
            <div>
              <WhyUs
                icon={<PiLockKey style={{ color: "white" }} />}
                title={"Secure Payment"}
                text={
                  "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur incididunt ut labore"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="silver-path-section">
        <Box/>
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default LandingPage;
