import React from "react";
import { FaShoppingBasket, FaUser } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-container">
      <ul className="nav">
        <Link to="/products">
          <li>Products</li>
        </Link>
        <li>Electric Scooters</li>
        <li>Accessories</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <Link to="/">
        <img
          className="logo"
          style={{ width: "148px" }}
          src="/assets/download.png"
          alt="Logo"
        />
      </Link>

      <div className="icons">
        <form className="search-form">
          <input type="search" placeholder="Search products..." />
          <button className="search-button" type="submit">
            <BsChevronRight />
          </button>
        </form>
        <span className="shopping-basket-icon">
          <FaShoppingBasket />
        </span>
        <span className="user-icon">
          <FaUser />
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
