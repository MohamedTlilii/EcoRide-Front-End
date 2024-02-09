import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import { Form } from "semantic-ui-react";
import LandingPageFooter from "../../Components/Footer/Footer";
import ElectricScootersProducts from "../../Components/ElectricScooters/ElectricScootersProducts";
import { useFetch } from "../../utils/useFetch";
import { PacmanLoader } from "react-spinners";
function ElectricScooters() {
  const [search, setSearch] = useState("");
  // console.log(search);
  const [inputPrice, setInputPrice] = useState(1);
  let token = localStorage.getItem("token");
  const { data, error } = useFetch(
    "https://ecoridebackend.onrender.com/api/user/getProducts",
    token
  );
  // console.log(data);
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
                placeholder="Search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <Form.Input
                label={inputPrice}
                min={400}
                max={1000}
                // name="hide"
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
      <div className="electric-section-four">
        {data ? (
          data
            .filter((elt) => elt.category === "scooter")
            .filter((e) => e.title.toLowerCase().includes(search.toLowerCase()))
            .filter((e) => e.price >= inputPrice)
            .map((product) => (
              <ElectricScootersProducts key={product.id} {...product} />
            ))
        ) : (
          <PacmanLoader color="#36d7b7" size={60} />
        )}
      </div>
    </div>
  );
}

export default ElectricScooters;
