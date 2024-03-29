import React, { useState } from "react";

import ButtonCard from "../../Components/Btn/ButtonCard";
import { useNavigate, useParams } from "react-router-dom";
// import LandingPageFooter from "../../Components/Footer/Footer";
import { Thumbnails } from "../../Components/Thumbanails/Thumbnails";

import "./style.css";
import Reviews from "../../Components/Reviews/Reviews";
import { useFetch } from "../../utils/useFetch";
import { PacmanLoader, RingLoader } from "react-spinners";
// import ShoppingCart from "../../Components/ShopingCard/ShoppingCart";
import axios from "axios";
import { adminUrl, url } from "../../utils/url";
import {
  Button,
  Form,
  ModalHeader,
  ModalContent,
  ModalActions,
  Dropdown,
  Modal,
} from "semantic-ui-react";
// import { toast, ToastContainer } from "react-toastify";
function ProductsSolo() {
  let { id } = useParams();
  let token = localStorage.getItem("token");
  let isAdmin = localStorage.getItem("isAdmin");
  const { data } = useFetch(
    `https://ecoridebackend.onrender.com/api/user/getSingleProduct/${id}`
  );
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState({ quantity: 1 });
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  // console.log(data);
  const handleAddProductToCart = () => {
    setLoading(true);
    axios
      .post(`${url}/addProductToCart/${id}`, quantity, {
        headers: { token },
      })
      .then((res) => {
        setLoading(false);

        console.log(res);
      })
      .catch((err) => {
        setLoading(false);

        console.dir(err);
      });
  };
  const [productData, setProductData] = useState({});
  const [category, setCategory] = useState("");
  // console.log(productData);
  const [productPhoto, setProductPhoto] = useState();

  const options = [
    {
      key: "kgzX6",
      text: "Scooter",
      value: "scooter",
    },
    {
      key: "0jWRSCP0uBT7",
      text: "Accessory",
      value: "access",
    },
  ];
  const handleUpdaitProduct = () => {
    setLoading(true);
    let { title, price, description } = productData;
    const productFormData = new FormData();
    if (productPhoto) {
      for (let i = 0; i < productPhoto.length; i++) {
        productFormData.append("photos", productPhoto[i]);
      }
    }
    // productFormData.append("photo", productPhoto[0]);
    // productFormData.append("photo", productPhoto[1]);
    // productFormData.append("photo", productPhoto[2]);
    // productFormData.append("photo", productPhoto[3]);

    title && productFormData.append("title", title);
    price && productFormData.append("price", price);
    description && productFormData.append("description", description);
    // category && productFormData.append("category", category);
    axios
      .put(`${adminUrl}/updateProduct/${id}`, productFormData, {
        headers: { token },
      })
      .then((res) => {
        setLoading(false);
        setOpen(false);
      })
      .catch((err) => {
        setLoading(false);
        setOpen(false);
        console.dir(err);
      });
  };

  const handleAdminDeleteProduct = () => {
    setLoading(true);
    axios
      .delete(
        `https://ecoridebackend.onrender.com/api/admin/deleteProduct/${id}`,
        {
          headers: { token },
        }
      )
      .then((res) => {
        setLoading(false);
        navigate("/electricscooters");
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        console.dir(err);
      });
  };

  return (
    <div className="solo-product-parent-div">
      {/* edit product modal */}
      <Modal
        style={{
          width: "50%",
          height: "40%",
          position: "absolute",
          left: "500px",
          top: "300px",
        }}
        onClose={() => setOpen(false)}
        open={open}
      >
        <ModalHeader>Update Product</ModalHeader>
        <ModalContent>
          <Form>
            <Form.Group>
              <label>
                <input
                  style={{ width: "927px", height: "50px" }}
                  type="file"
                  name="photo"
                  multiple
                  onChange={(e) => {
                    setProductPhoto(e.target.files);
                  }}
                />
                {/* <Button loading={loading}>Update photos</Button> */}
              </label>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                type="text"
                placeholder="Product"
                name="title"
                defaultValue={productData.title}
                onChange={(e) => {
                  setProductData({
                    ...productData,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <Form.Input
                type="text"
                placeholder="Price"
                name="price"
                defaultValue={productData.price}
                onChange={(e) => {
                  setProductData({
                    ...productData,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                type="text"
                placeholder="Description"
                name="description"
                defaultValue={productData.description}
                onChange={(e) => {
                  setProductData({
                    ...productData,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              {/* <Dropdown
                placeholder="Choose category"
                search
                selection
                onChange={(e, data) => {
                  setCategory(data.value);
                }}
                options={options}
              /> */}
            </Form.Group>
          </Form>
        </ModalContent>
        <ModalActions>
          <Button type="button" color="black" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            type="button"
            positive
            loading={loading}
            onClick={() => {
              handleUpdaitProduct();
            }}
          >
            Update
          </Button>
        </ModalActions>
      </Modal>
      <div className="solo-product">
        <div className="products-cont">
          <div className="products-mains">
            {!data ? (
              <RingLoader
                color="#36d7b7"
                size={80}
                style={{ position: "relative", top: "160px", right: "140px" }}
              />
             ) : ( 
               <Thumbnails images={data?.imageUrls} />
             )} 
          </div>

          <div className="content-card-boxx">
            <span className="electric-scooters-scooter-accs">
              Electric Scooters
            </span>

            <h2 className="product-content-scooter-accs"> {data?.title}</h2>

            <div className="box-prices-scooter-accs">
              <span className="price-without-cut-scooter-accs">
                {data?.price}TND
              </span>
              <span>& Free Shipping</span>
            </div>
            <p>{data?.description}</p>
            <div className="label-btn-scooter-accs">
              <div>
                <input
                  onChange={(e) => {
                    setQuantity({ quantity: e.target.value });
                  }}
                  className="quantity-buttons_added-scooter-accs"
                  type="number"
                  min={1}
                  max={50}
                  defaultValue={1}
                />
              </div>
              <ButtonCard fn={handleAddProductToCart} text={"ADD TO CART "} />
              {isAdmin === "true" && (
                <ButtonCard fn={() => setOpen(true)} text={"Update "} />
              )}
              {isAdmin === "true" && (
                <ButtonCard fn={handleAdminDeleteProduct} text={"Delete  "} />
              )}
            </div>
            <fieldset>
              <legend>Guaranteed Safe Checkout</legend>
              <div className="payment-methods-scooter-accs">
                <img
                  src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/payment-icons.png"
                  style={{ width: "256px", height: "20px" }}
                  alt=""
                />
              </div>
            </fieldset>
            <div className="safe-scooter-accs">
              <span> ✔️No-Risk Money Back Guarantee!</span>
              <span> ✔️No Hassle Refunds</span>
              <span> ✔️Secure Payments</span>
            </div>
          </div>
        </div>
        <div className="reviews">
          <Reviews productId={id} />
        </div>
      </div>
    </div>
  );
}

export default ProductsSolo;
