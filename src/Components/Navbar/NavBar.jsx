import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";
import ShoppingCart from "../ShopingCard/ShoppingCart";
function NavBar() {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  let isUser = JSON.parse(localStorage.getItem("isUser"));
  let isAdmin = localStorage.getItem("isAdmin");
  let isBanned = localStorage.getItem("false");

  return (
    <nav className="nav-container">
      <Link to="/">
        <img
          className="logo"
          // style={{ width: "188px", height: "88px" }}
          src="/assets/home/ecoride-logo-green.png"
          alt="Logo"
        />
      </Link>

      <ul className="nav">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/electricscooters">
          <li>Electric Scooters</li>
        </Link>
        <Link to="/accessories">
          <li>Accessories</li>
        </Link>
        {!isAdmin && (
          <>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </>
        )}
        {token && isUser ? (
          // <>
          //   {token && (
          <>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <Link to="/profile">
              <li>Profile</li>
            </Link>

            <li>
              <ShoppingCart />
            </li>
          </>
        ) : (
          token &&
          isAdmin && (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </>
          )
        )}
        {token ? (
          <Link
            onClick={() => {
              localStorage.clear();
              setTimeout(() => {
                navigate("/login");
              }, 100);
            }}
          >
            <li>Logout</li>
          </Link>
        ) : (
          <>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/register">
              <li>Register</li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
