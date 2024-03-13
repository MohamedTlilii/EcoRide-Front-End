import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";
import ShoppingCart from "../ShopingCard/ShoppingCart";

function NavBar() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 300);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  useEffect(() => {
    console.log("After toggle - navActive:", navActive);
  }, [navActive]); // Run this effect whenever navActive changes

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

      {isMobile && (
        <button className="nav-toggle" onClick={toggleNav}>
          ☰
        </button>
      )}

      {(isMobile && navActive) || !isMobile ? (
        <ul className={`nav ${navActive ? "active" : ""}`}>
          <li>
            <Link
              to="/"
              style={{ color: "black", fontFamily: "Exo, sans-serif" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/electricscooters"
              style={{ color: "black", fontFamily: "Exo, sans-serif" }}
            >
              Electric Scooters
            </Link>
          </li>
          <li>
            <Link
              to="/accessories"
              style={{ color: "black", fontFamily: "Exo, sans-serif" }}
            >
              Accessories
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ color: "black", fontFamily: "Exo, sans-serif" }}
            >
              About
            </Link>
          </li>

          {token && isUser && !isBanned && !isAdmin && (
            <>
              <li>
                <Link
                  to="/contact"
                  style={{ color: "black", fontFamily: "Exo, sans-serif" }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  style={{ color: "black", fontFamily: "Exo, sans-serif" }}
                >
                  Profile
                </Link>
              </li>

              <li style={{ cursor: "pointer" }}>
                <ShoppingCart />
              </li>
            </>
          )}

          {token && isAdmin && !isUser && !isBanned && (
            <li>
              <Link
                to="/dashboard"
                style={{ color: "black", fontFamily: "Exo, sans-serif" }}
              >
                Dashboard
              </Link>
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
                style={{ color: "black", fontFamily: "Exo, sans-serif" }}
              >
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  style={{ color: "black", fontFamily: "Exo, sans-serif" }}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  style={{ color: "black", fontFamily: "Exo, sans-serif" }}
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      ) : null}
    </nav>
  );
}

export default NavBar;
