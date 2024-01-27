import React from "react";
// import { FaShoppingBasket, FaUser } from "react-icons/fa";
// import { BsChevronRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import "./Style.css";
import ShoppingCart from "../ShopingCard/ShoppingCart";
function NavBar() {
  const navigate = useNavigate();
  // let activeStyle = "font-bold text-sky-400 border-b-[1px] border-sky-400 pb-2";
  let token = localStorage.getItem("token");
  // let isUser = localStorage.getItem("isUser");
  // let isAdmin = localStorage.getItem("isAdmin");
  // const shoppingBasket = useSelector((store) => store.shoppingBasket);
  return (
    <nav className="nav-container">
      <Link>
        <img
          className="logo"
          style={{ width: "188px", height: "88px" }}
          src="/assets/home/ecoride-logo-green.png"
          alt="Logo"
        />
      </Link>

      <ul className="nav">
        {token && (
          <Link to="/electricscooters">
            <li>Electric Scooters</li>
          </Link>
        )}

        {token && (
          <Link to="/accessories">
            {" "}
            <li>Accessories</li>
          </Link>
        )}

        <Link to="/about">
          {" "}
          <li>About</li>
        </Link>

        <Link to="/contact">
          <li>Contact</li>
        </Link>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        {token && (
          <Link to="/profile">
            <li>Profile</li>
          </Link>
        )}
        {token && <ShoppingCart />}
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
              <li>register</li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;