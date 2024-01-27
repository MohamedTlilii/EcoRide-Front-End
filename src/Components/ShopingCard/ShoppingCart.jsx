import { useState } from "react";
// import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Style.css";
import { FaCartShopping } from "react-icons/fa6";

function ShoppingCart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="ShoppingCart">
      <FaCartShopping  variant="primary" onClick={handleShow}/>
        

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>No products in the cart.</Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default ShoppingCart;
