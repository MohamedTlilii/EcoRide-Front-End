import React from "react";
import { FaShoppingBasket, FaUser } from "react-icons/fa";
// import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import "./Style.css";
function NavBar() {
  // let activeStyle = "font-bold text-sky-400 border-b-[1px] border-sky-400 pb-2";
  // let token = localStorage.getItem("token");
  // let isUser = localStorage.getItem("isUser");
  // let isAdmin = localStorage.getItem("isAdmin");
  // const shoppingBasket = useSelector((store) => store.shoppingBasket);
  return (
    <nav className="nav-container">
      <Link to="/">
        <img
          className="logo"
          style={{ width: "188px", height: "88px" }}
          src="/assets/home/ecoride-logo-green.png"
          alt="Logo"
        />
      </Link>

      <ul className="nav">
        <Link
          
          to="/electricscooters"
        >
          <li>Electric Scooters</li>
        </Link>
        <Link to="/accessories">
          {" "}
          <li>Accessories</li>
        </Link>
        <Link to="/about">
          {" "}
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>

        <></>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <Link to="/profile">
          <li>Profile</li>
        </Link>

        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/register">
          <li>register</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
