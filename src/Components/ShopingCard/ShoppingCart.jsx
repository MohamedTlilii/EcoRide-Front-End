import { useEffect, useState } from "react";

import { Offcanvas } from "react-bootstrap";
import "./Style.css";
import { FaCartShopping } from "react-icons/fa6";
import axios from "axios";
import { url } from "../../utils/url";
import { Button, ButtonGroup, Icon } from "semantic-ui-react";

import { Bounce, toast, ToastContainer } from "react-toastify";

function ShoppingCart() {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let token = localStorage.getItem("token");
  let total = cart?.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.quantity * currentValue.productId.price,
    0
  );
  useEffect(() => {
    // setLoading(true);
    axios
      .get(`${url}/getOwnCart`, {
        headers: { token },
      })
      .then((res) => {
        setLoading(false);
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
  const handleSubmitOdrer = () => {
    setLoading(true);
    axios
      .post(
        `${url}/createOrder`,
        { total },
        {
          headers: { token },
        }
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
        setShow(false);
        toast.success("Product was added successfully ", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      })
      .catch((err) => {
        console.dir(err);
        setLoading(true);
      });
  };
  const handleDeleteCart = () => {
    setLoading1(true);
    axios
      .delete(`${url}/deleteCart`, {
        headers: { token },
      })
      .then((res) => {
        console.log(res);
        setLoading1(false);
        setTimeout(() => {
          setShow(false);
        }, 1000);
      })
      .catch((err) => {
        console.dir(err);
        setLoading1(true);
      });
  };
  const handleDeleteSingleProduct = (id) => {
    setLoading2(true);
    axios
      .delete(`${url}/removeProductFromCart/${id}`, {
        headers: { token },
      })
      .then((res) => {
        console.log(res);
        setLoading2(false);
      })
      .catch((err) => {
        console.dir(err);
        setLoading2(false);
      });
  };
  return (
    <div className="ShoppingCart">
      <span onClick={handleShow}>
        <FaCartShopping variant="primary" />
        <span> {cart?.length} </span>
      </span>
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
                <Button
                  icon
                  onClick={() => {
                    handleDeleteSingleProduct(product.productId._id);
                  }}
                  loading={loading2}
                >
                  <Icon name="trash" />
                </Button>
              </div>
            </div>
          ))}
        </Offcanvas.Body>
        <div className="Subtotal">
          <h3>Subtotal: {total} TND </h3>
        </div>
        {/* <Link to="/chekout"> */}
        <ButtonGroup>
          <Button
            onClick={() => {
              handleDeleteCart();
            }}
            color="black"
            disabled={cart.length > 0 ? false : true}
            loading={loading1}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleSubmitOdrer();
            }}
            color="green"
            disabled={cart.length > 0 ? false : true}
            loading={loading}
          >
            Submit odrer
          </Button>
        </ButtonGroup>
      </Offcanvas>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default ShoppingCart;
