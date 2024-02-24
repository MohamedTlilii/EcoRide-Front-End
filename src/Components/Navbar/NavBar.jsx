import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";
import ShoppingCart from "../ShopingCard/ShoppingCart";
function NavBar() {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  let isUser = JSON.parse(localStorage.getItem("isUser"));
  let isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
  let isBanned = JSON.parse(localStorage.getItem("isBanned"));

  return (
    <nav className="nav-container">
      <Link to="/">
        <img
          className="logo"
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

        <Link to="/about">
          <li>About</li>
        </Link>

        {token && isUser && !isBanned && !isAdmin && (
          <>
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
        )}

        {token && isAdmin && !isUser && !isBanned && (
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )}
        {token && !isBanned ? (
          <li>
            <Link
              onClick={() => {
                localStorage.clear();
                setTimeout(() => {
                  navigate("/login");
                }, 100);
              }}
            >
              Logout
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;