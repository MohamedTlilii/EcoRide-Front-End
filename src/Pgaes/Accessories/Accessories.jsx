import React from "react";
import { IoListOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaTableCellsLarge, FaTableList } from "react-icons/fa6";
import "./Style.css";
import LandingPageFooter from "../../Components/Footer/Footer";
import AccessoriesProduct from "../../Components/Accessories/AccessoriesProduct";
function Accessories({ products }) {
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
          <p>Showing all 6 results</p>
          <IoListOutline className="slection-icons-accessoir" />
          <p>Filter</p>
          <div className="accessories-section-third">
            <FaTableCellsLarge />
            <FaTableList />
          </div>
        </div>
      </div>
      <div className="accessories-section-four">
        {products.map((product) => (
          <AccessoriesProduct key={product.id} {...product} />
        ))}
      </div>
      <div className="footer">
        <LandingPageFooter />
        <div className="last-footer">
          <p>Copyright © 2023 Electric Scooter | Powered by Electric Scooter</p>
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
