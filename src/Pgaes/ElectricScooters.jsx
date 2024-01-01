import React from "react";
import { IoListOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaTableCellsLarge, FaTableList } from "react-icons/fa6";
import ElectricScootersProducts from "../Components/ElectricScootersProducts";
import LandingPageFooter from "../Components/LandingPageFooter";
function ElectricScooters({ products }) {
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
          <p>Showing all 12 results</p>
          <IoListOutline className="slection-icons" />
          <p>Filter</p>
          <div className="electric-section-third">
            <FaTableCellsLarge />
            <FaTableList />
          </div>
        </div>
      </div>
      <div className="electric-section-four">
        {products.map((product) => (
          <ElectricScootersProducts key={product.id} {...product} />
        ))}

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
    </div>
  );
}

export default ElectricScooters;
