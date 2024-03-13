import CardKm from "../../Components/Home/CardKm";
import ButtonCard from "../../Components/Btn/ButtonCard";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareYoutube } from "react-icons/fa6";
import CardProduct from "../../Components/Home/CardProduct";
import { useState } from "react";
import "./style.css";
import Box from "../../Components/Home/Box";
import LandingPageAbout from "../../Components/Home/LandingPageAbout";
import LandingPageFour from "../../Components/Home/LandingPageFour";
import LandingPageWhy from "../../Components/Home/LandingPageWhy";
import { Link } from "react-router-dom";
import { useFetch } from "../../utils/useFetch";
import { PacmanLoader, RingLoader } from "react-spinners";
import axios from "axios";
import { url } from "../../utils/url";

function LandingPage() {
  let token = localStorage.getItem("token");

  const [quantity, setQuantity] = useState({ quantity: 1 });
  const { data } = useFetch(
    "https://ecoridebackend.onrender.com/api/user/getProducts",
    token
  );
  let mainProduct = data?.find((elt) => elt.title === "Libero X250");
  let secondProduct = data?.find(
    (elt) => elt.title === "Electric Scooter Z400"
  );
  const handleAddProductToCart = () => {
    axios
      .post(`${url}/addProductToCart/${mainProduct._id}`, quantity, {
        headers: { token },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  const renderInfoCards = () => {
    return (
      <div className="info-cards">
        <div className="card">
          <CardKm text={30} km={"km"} content={"BATTERY"} />
        </div>
        <div className="card">
          <CardKm text={"13,5"} km={"kg"} content={"WEIGHT"} />
        </div>
        <div className="card">
          <CardKm text={25} km={"km/h"} content={"SPEED"} />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div class="hero">
        <div class="hero-details">
          <div class="hero-title">
            <h1 class="title">
              {mainProduct ? (
                `${mainProduct?.title}`
              ) : (
                <RingLoader size={80} color="#36d7b7" />
              )}
            </h1>
          </div>

          <div class="hero-info">
            <h5 class="info-title">Informations:</h5>
            {renderInfoCards()}
          </div>

          <div class="hero-actions">
            <span class="price">{mainProduct?.price} TND</span>
            <span class="add-to-cart">
              <ButtonCard fn={handleAddProductToCart} text={"ADD TO CART"} />
            </span>
          </div>
        </div>

        <div class="hero-image">
          {mainProduct ? (
            <img class="product-image" src={mainProduct.imageUrls[0]} alt="" />
          ) : (
            <RingLoader size={100} color="#36d7b7" />
          )}
        </div>

        <div class="hero-description">
          <h4 class="description-title">Description</h4>
          <p class="description-text">
            {mainProduct ? (
              `${mainProduct?.description}`
            ) : (
              <RingLoader size={70} color="#36d7b7" />
            )}
          </p>
          <div class="share-title-cont">
            <h6 class="share-title">SHARE:</h6>
            <div class="social-logos">
              <FaFacebook class="fb-logo" />
              <AiFillTwitterCircle class="twitter-logo" />
              <FaSquareYoutube class="youtube-logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="product-section">
        <div className="products">
          {data ? (
            data
              .slice(0, 4)
              .map((product, i) => (
                <CardProduct key={product.id} {...product} />
              ))
          ) : (
            <RingLoader
              color="#36d7b7"
              size={160}
              style={{ position: "relative", top: "160px", left: "850px" }}
            />
          )}
        </div>
      </div>
      <LandingPageAbout />
      <div className="third-section">
        {data ? (
          <div className="card-third-section">
            <Link to="/electricscooters">
              <img
                className="img-third-section"
                // style={{ width: "658px", height: "577px" }}
                src={secondProduct?.imageUrls[0]}
                alt=""
              />
            </Link>

            <h1 className="titlle-third-section">{secondProduct?.title}</h1>
            <p className="price-third-section">
              {secondProduct?.price} <span>TND</span>
            </p>
          </div>
        ) : (
          // Display a loading spinner when data is not available
          <RingLoader
            color="#36d7b7"
            size={160}
            style={{ position: "relative", top: "50px", left: "350px" }}
          />
        )}
      </div>
      <LandingPageFour />
      <div className="section-five">
        <div className="content-five">
          <div className="section-five-content">
            <h1>Shop Electric Scooter Accessories</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <Link to={"accessories"}>
              {/* <ButtonCard  text={"SHOP ACCESSORIES"} /> */}

              <div>
                <button type="button" className="btn-cartttttt">
                  SHOP ACCESSORIES
                </button>
              </div>
            </Link>
          </div>

          <img
            className="image-shop-acces"
            src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/accessories-01.png"
            alt=""
          />
        </div>
      </div>
      <LandingPageWhy />
      <div className="silver-path-section">
        <Box />
      </div>
    </div>
  );
}

export default LandingPage;
