import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";
import ShoppingCart from "../ShopingCard/ShoppingCart";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function NavBar() {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  let isUser = JSON.parse(localStorage.getItem("isUser"));
  let isAdmin = localStorage.getItem("isAdmin");

  return (
    <div>
      <Navbar expand="lg" className="g-body-btertiary">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                className="logo"
                style={{ width: "188px", height: "88px" }}
                src="/assets/home/ecoride-logo-green.png"
                alt="Logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                {" "}
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link href="#link">
                {" "}
                <Link to="/electricscooters">Electric Scooters</Link>
              </Nav.Link>
              <Nav.Link href="#link">
                {" "}
                <Link to="/about">Accessories</Link>
              </Nav.Link>
              <Nav.Link href="#link">
                {" "}
                <Link to="/accessories">About</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {token && isUser ? (
        // <>
        //   {token && (
        <>
          <Nav.Link href="#link">
            {" "}
            <Link to="/contact">Contact</Link>
          </Nav.Link>
          <Nav.Link href="#link">
            {" "}
            <Link to="/profile">Profile</Link>
          </Nav.Link>
          <Nav.Link href="#link">
            {" "}
            <ShoppingCart />
          </Nav.Link>
        </>
      ) : (
        token &&
        isAdmin && (
          <>
            <Nav.Link href="#link">
              {" "}
              <Link to="/dashboard">Dashboard</Link>
            </Nav.Link>
          </>
        )
      )}
      {token ? (
        <Nav.Link
          onClick={() => {
            localStorage.clear();
            setTimeout(() => {
              navigate("/login");
            }, 100);
          }}
        >
          Logout
        </Nav.Link>
      ) : (
        <>
          <Nav.Link href="#link">
            {" "}
            <Link to="/login">Login</Link>
          </Nav.Link>{" "}
          <Nav.Link href="#link">
            {" "}
            <Link to="/register">Register</Link>
          </Nav.Link>
        </>
      )}
    </div>
  );
}

export default NavBar;
