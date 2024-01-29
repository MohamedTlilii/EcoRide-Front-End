import React, { useState } from "react";

// import { IoListOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Form } from "semantic-ui-react";
import "./Style.css";
import LandingPageFooter from "../../Components/Footer/Footer";
import AccessoriesProduct from "../../Components/Accessories/AccessoriesProduct";
import { useFetch } from "../../utils/useFetch";
import { PacmanLoader } from "react-spinners";

function Accessories({ products }) {
  const [inputPrice, setInputPrice] = useState(490);
  let token = localStorage.getItem("token");
  const { data, error } = useFetch(
    "https://ecoridebackend.onrender.com/api/user/getProducts",
    token
  );
  return (
    <div className="accessories-section">
      <div className="accessories-section-one">
        <nav>
          <ul>
            <Link to={"/"}>
              <li className="accessories-to-home">Home</li>
            </Link>
            <span className="accessories-to-home">/</span>
            <li className="accessories-to-home">Accessories</li>
          </ul>
        </nav>
        <div className="accessories-section-two">
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                className="scooter-name-search"
                label="Accessories"
                placeholder="Accessorie name"
              />
              <Form.Input
                label={inputPrice}
                min={490}
                max={1000}
                name="hide"
                onChange={(e, value) => {
                  setInputPrice(value.value);
                }}
                step={50}
                type="range"
                // value={hide}
              />
            </Form.Group>
          </Form>
        </div>
      </div>
      <div className="accessories-section-four">
        {data
          ?data.filter((elt) => elt.category === "access")
          .map((product) => (
            <AccessoriesProduct key={product.id} {...product} />
          )): (
            <PacmanLoader color="#36d7b7" size={200} />
          )}
      </div>
      <div className="footer">
        <LandingPageFooter />
        <div className="last-footer">
          <p>Copyright © 2023 EcoRide | Powered by EcoRide</p>{" "}
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

export default Accessories;
