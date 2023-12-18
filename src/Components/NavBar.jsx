import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>Shop All</Nav.Link>
            <Nav.Link>Electric Scooters</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Contact</Nav.Link>

            <img src="/assets/download.png" alt="" />
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search products..."
              className="me-2"
              aria-label="Search"
            />
            <Button style={{  backgroundColor:"rgb(201, 53, 53)"}} variant="outline-success">
              <BsChevronRight style={{color:"white"}} />
            </Button>
          </Form>
          <FaShoppingBasket style={{color:"rgb(201, 53, 53)"}} />
          <FaUser />

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
