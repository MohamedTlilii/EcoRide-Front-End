import React from "react";
import { FaShoppingBasket, FaUser } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";

function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav-links">
        <ul>
        <li>Shop All</li>
        <li>Electric Scooters</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
      </div>
      <div className="brand-logo">
        <img src="/assets/download.png" alt="Logo" />
      </div>
      <form className="search-form">
        <input type="search" placeholder="Search products..." />
        <button className="search-button" type="submit">
          <BsChevronRight />
        </button>
      </form>
      <div className="icons">
        <span className="shopping-basket-icon">
          <FaShoppingBasket />
        </span>
        <span className="user-icon">
          <FaUser />
        </span>
      </div>
    </div>
  );
}

export default NavBar;
