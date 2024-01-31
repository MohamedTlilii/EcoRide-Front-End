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
import Footer from "../../Components/Footer/Footer";
import { useFetch } from "../../utils/useFetch";
import { PacmanLoader } from "react-spinners";
import axios from "axios";
import { url } from "../../utils/url";

function LandingPage() {
  let token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState({ quantity: 1 });
  const { data } = useFetch(
    "https://ecoridebackend.onrender.com/api/user/getProducts",
    token
  );
  let mainProduct = data?.find((elt) => elt.title === "Libero X250");
  const handleAddProductToCart = () => {
    setLoading(true);
    axios
      .post(`${url}/addProductToCart/${mainProduct._id}`, quantity, {
        headers: { token },
      })
      .then((res) => {
        setLoading(false);

        console.log(res);
      })
      .catch((err) => {
        setLoading(false);

        console.dir(err);
      });
  };
  return (
    <div className="parent-div">
      <div className="hero-section">
        <div className="hero-section-content">
          <h1>{mainProduct?.title}</h1>
          {/* <ShoppingCart/>   */}
          {/* <h4 className="hero-titlle">{mainProduct?.description}</h4> */}
          <h5 className="hero-second-title">Informations:</h5>
          <div className="card-km-info">
            <CardKm text={30} km={"km"} content={"BATTERY"} />
            <CardKm text={"13,5"} km={"kg"} content={"WEIGHT"} />
            <CardKm text={25} km={"km/h"} content={"SPEED"} />
          </div>
          <div className="add-cart-section">
            {mainProduct?.price} <span>TND</span>
            <span className="add-cart-span">
              <ButtonCard fn={handleAddProductToCart} text={"ADD TO CART"} />
            </span>
          </div>
        </div>

        <div className="scoter-hero-section">
          <img
            style={{ width: "658px", height: "577px" }}
            src={mainProduct?.imageUrls[0]}
            alt=""
          />
        </div>
        <div className="last-section-hero">
          <h4 className="last-section-title">Description</h4>
          <p className="last-section-titlle-p">{mainProduct?.description}</p>
          <h6 className="last-section-logos-titlle">SHARE:</h6>
          <FaFacebook className="fb-logo" />
          <AiFillTwitterCircle className="twiter-logo" />
          <FaSquareYoutube className="youtube-logo" />
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
            <PacmanLoader color="#36d7b7" size={200} />
          )}
        </div>
      </div>
      <LandingPageAbout />
      <div className="third-section">
        <div className="card-third-section">
          <Link to="/electricscooters">
            <img
              className="img-third-section"
              src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/scooter-02.png"
              alt=""
            />
          </Link>
          <figcaption>CITY</figcaption>
          <h1 className="titlle-third-section">Electric Scooter Z400</h1>
          <p className="price-third-section">650 <span>TND</span> </p>
        </div>
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
              <ButtonCard text={"SHOP ACCESSORIES"} />
            </Link>
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
        <Footer />
        <div className="last-footer">
          <p>Copyright © 2023 EcoRide | Powered by EcoRide</p>
          <img
            src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/payment-icons.png"
            style={{ width: "246px", height: "20px" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
