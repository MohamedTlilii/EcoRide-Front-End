import AdminAside from "../../Components/Navbar/AdminAside";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Dropdown } from "semantic-ui-react";
import axios from "axios";
import { adminUrl } from "../../utils/url";
import { toast, ToastContainer } from "react-toastify";

function AddProduct() {
  let token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [productData, setProductData] = useState({});
  const [category, setCategory] = useState("");
  // console.log(productData);
  const [productPhoto, setProductPhoto] = useState();
  const [loading, setLoading] = useState(false);
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
  const handleAddProduct = () => {
    setLoading(true);
    let { title, price, description } = productData;
    const productFormData = new FormData();
    for (let i = 0; i < productPhoto.length; i++) {
      productFormData.append("photo", productPhoto[i]);
    }
    productFormData.append("title", title);
    productFormData.append("price", Number(price));
    productFormData.append("description", description);
    productFormData.append("category", category);
    // console.log(productFormData);

    axios
      .post(`${adminUrl}/addProduct`, productFormData, {
        headers: { token },
      })
      .then((res) => {
        setLoading(false);
        // console.log(res);
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
    <div className="dashboard">
      <AdminAside />
      <div className="orders-container">
        <div className="table-data">
          <Form className="dashboardProductform">
            <h1>Add Product</h1>
            <Form.Group
              onChange={(e) => {
                setProductData({
                  ...productData,
                  [e.target.name]: e.target.value,
                });
              }}
              widths="equal"
            >
              <Form.Input
                className="input-add-pr"
                type="text"
                placeholder="Product"
                name="title"
              />
              <Form.Input type="text" placeholder="Price" name="price"  />
            </Form.Group>

            <Form.Group
              onChange={(e) => {
                setProductData({
                  ...productData,
                  [e.target.name]: e.target.value,
                });
              }}
            >
              <Form.Input
                type="text"
                placeholder="Description"
                name="description"
                className="custom"
                
              />
              <Dropdown
                placeholder="Choose category"
                search
                selection
                onChange={(e, data) => {
                  setCategory(data.value);
                }}
                options={options}
                className="custom"
              />
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
                multiple
                onChange={(e) => {
                  setProductPhoto(e.target.files);
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
        </div>

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
    </div>
  );
}

export default AddProduct;
