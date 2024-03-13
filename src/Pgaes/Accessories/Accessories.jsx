import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "semantic-ui-react";
import "./Style.css";
// import LandingPageFooter from "../../Components/Footer/Footer";
import AccessoriesProduct from "../../Components/Accessories/AccessoriesProduct";
import { useFetch } from "../../utils/useFetch";
import { PacmanLoader, RingLoader } from "react-spinners";

function Accessories() {
  const [search, setSearch] = useState("");

  const [inputPrice, setInputPrice] = useState(40);
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
            <span className="accessories-to-home"></span>
            <li className="accessories-to-home">Accessories</li>
          </ul>
        </nav>
        <div className="accessories-section-two">
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                className="scooter-name-search"
                label="Accessories"
                placeholder="Search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <Form.Input
                label={inputPrice}
                min={1}
                max={500}
                name="hide"
                onChange={(e, value) => {
                  setInputPrice(value.value);
                }}
                step={1}
                type="range"
                value={inputPrice}
              />
            </Form.Group>
          </Form>
        </div>
      </div>
      <div className="accessories-section-four">
        {data ? (
          data
            .filter((elt) => elt.category === "access")
            .filter((e) => e.title.toLowerCase().includes(search.toLowerCase()))
            .filter((e) => e.price >= inputPrice)
            .map((product) => (
              <AccessoriesProduct key={product.id} {...product} />
            ))
        ) : (
          <RingLoader
            color="#36d7b7"
            size={100}
            style={{ position: "relative", top: "120px", left: "680px" }}
          />
        )}
      </div>
    </div>
  );
}

export default Accessories;
