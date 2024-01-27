import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./Style.css";
import { Form } from "semantic-ui-react";
import LandingPageFooter from "../../Components/Footer/Footer";
import ElectricScootersProducts from "../../Components/ElectricScooters/ElectricScootersProducts";
function ElectricScooters({ products }) {
  const [inputPrice, setInputPrice] = useState(490);

  return (
    <div className="electric-section">
      <div className="electric-section-one">
        <nav>
          <ul>
            <Link to={"/"}>
              <li className="elictric-to-home">Home</li>
            </Link>
            <span className="elictric-to-home">/</span>
            <li className="elictric-to-home">Electric Scooters</li>
          </ul>
        </nav>
        <div className="electric-section-two">
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                className="scooter-name-search"
                label="Electric Scooters"
                placeholder="scooter name"
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
      <div className="electric-section-four">
        {products.map((product) => (
          <ElectricScootersProducts key={product.id} {...product} />
        ))}
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

export default ElectricScooters;