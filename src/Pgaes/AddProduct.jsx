import AdminAside from "../Components/Navbar/AdminAside";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { adminUrl } from "../utils/url";
import { toast, ToastContainer } from "react-toastify";

function AddProduct() {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({});
  // console.log(productData);
  const [productPhoto, setProductPhoto] = useState();
  const [loading, setLoading] = useState(false);

  const handleAddProduct = () => {
    setLoading(true);
    let token = localStorage.getItem("token");
    let { title, price, description, category } = productData;
    const productFormData = new FormData();
    productFormData.append("photo", productPhoto);
    productFormData.append("title", title);
    productFormData.append("price", price);
    productFormData.append("description", description);
    productFormData.append("category", category);
    // console.log(productFormData);

    axios
      .post(`${adminUrl}/addProduct`, productFormData, {
        headers: { token },
      })
      .then((res) => {
        setLoading(false);
        console.log(res);
        toast.success("Contact was added successfully", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((err) => {
        setLoading(false);
        console.dir(err);
        if (err.response.data.error.includes("Invalid token")) {
          localStorage.clear();
          navigate("/login");
        }
      });
  };
  return (
    <div className="dashboardProduct">
      <AdminAside />

      <Form className="dashboardProductform">
        <h1>Add New Product</h1>
        <Form.Group
          onChange={(e) => {
            setProductData({ ...productData, [e.target.name]: e.target.value });
          }}
          widths="equal"
        >
          <Form.Input type="text" placeholder="Product" name="Product" />
          <Form.Input type="text" placeholder="Price" name="Price" />
        </Form.Group>

        <Form.Group
          onChange={(e) => {
            setProductData({ ...productData, [e.target.name]: e.target.value });
          }}
          widths="equal"
        >
          <Form.Input
            type="text"
            placeholder="Description"
            name="Description"
          />
          <Form.Input type="text" placeholder="Category" name="Category" />
        </Form.Group>

        <Form.Group>
          <input
            style={{
              height: "50px",
              width: "430px",
              position: "relative",
              left: "7px",
            }}
            type="file"
            name="Photo"
            onChange={(e) => {
              setProductPhoto(e.target.files[0]);
              // console.log(e.target.files[0]);
            }}
          />
        </Form.Group>
        <Button
          color=" red"
          onClick={() => {
            handleAddProduct();
          }}
          loading={loading}
        >
          Add
        </Button>
      </Form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default AddProduct;
