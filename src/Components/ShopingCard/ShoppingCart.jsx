import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Style.css";
import { FaCartShopping } from "react-icons/fa6";
import axios from "axios";
import { url } from "../../utils/url";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

// import { useFetch } from "../../utils/useFetch";

function ShoppingCart() {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let token = localStorage.getItem("token");
  // console.log(cart);
  // const [loading, setLoading] = useState(false);
  // const [quantity, setQuantity] = useState({ quantity: 1 });
  useEffect(() => {
    // setLoading(true);
    axios
      .get(`${url}/getOwnCart`, {
        headers: { token },
      })
      .then((res) => {
        // setLoading(false);

        setCart(res.data.data);
      })
      .catch((err) => {
        // setLoading(false);

        console.dir(err);
      });
  }, [cart, token]);
  const handleInc = (id) => {
    setLoading(true);
    axios
      .put(
        `${url}/incProductQuantityFromCart/${id}`,
        {},
        {
          headers: {
            token,
          },
        }
      )
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  const handleDec = (id) => {
    axios
      .put(
        `${url}/decProductQuantityFromCart/${id}`,
        {},
        {
          headers: {
            token,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.dir(err);
      });
  };
  return (
    <div className="ShoppingCart">
      <FaCartShopping variant="primary" onClick={handleShow} />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="cart_body">
          {cart?.map((product, i) => (
            <div className="shopingCartBox" key={i}>
              <div>
                <img src={product.productId.imageUrls[0]} width={100} alt="" />
              </div>
              <div className="">
                <div className="pr_intro">
                  <h5 className="shopingCartTitle">
                    {" "}
                    {product.productId.title}
                  </h5>
                  <p>
                    {product.productId.price} <span>TND</span>
                  </p>
                </div>

                <form className="shopingCartForm">
                  <button
                    type="button"
                    onClick={() => {
                      handleInc(product.productId._id);
                    }}
                  >
                    +
                  </button>
                  <div>
                    <p>{product.quantity}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      handleDec(product.productId._id);
                    }}
                  >
                    -
                  </button>
                </form>
              </div>
            </div>
          ))}
        </Offcanvas.Body>
        <div className="Subtotal">
          <h3>Subtotal:</h3>
        </div>
        {/* <Link to="/Checkout"> */}
          <button className="buttonChekoutbtn">Checkout</button>
        {/* </Link> */}
      </Offcanvas>
    </div>
  );
}

export default ShoppingCart;
