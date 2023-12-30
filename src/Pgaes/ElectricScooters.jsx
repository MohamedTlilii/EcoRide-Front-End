import React from "react";
import { IoListOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaTableCellsLarge, FaTableList } from "react-icons/fa6";

function ElectricScooters() {
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
        </div>
        <div className="electric-section-third">
          <FaTableCellsLarge />
          <FaTableList />
        </div>
      </div>
      <div className="electric-section-four"></div>
    </div>
  );
}

export default ElectricScooters;
