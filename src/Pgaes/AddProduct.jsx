import React, { useState } from "react";
import AdminAside from "../Components/Navbar/AdminAside";
import { adminUrl } from "../utils/url";
import axios from "axios";
import {
  FormField,
  Form,
  Input,
  Button,
  Message,
  MessageHeader,
} from "semantic-ui-react";
function AddProduct() {
  let token = localStorage.getItem("token");
  const [addproduct, setAddproduct] = useState("");
  const [imgData, setImgData] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const handleAddPost = () => {
    setLoading(true);
    const postForm = new FormData();
    postForm.append("postPic", imgData);
    postForm.append("postBody", addproduct);
    axios
      .post(`${adminUrl}/addProduct`, postForm, {
        headers: { token },
      })
      .then((res) => {
        setLoading(false);
        if (res.data.status) {
          setMessage("Product added successfully");
          setAddproduct("");
        }
        // console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        console.dir(err);
      });
  };
  return (
    <div className="dashboardProduct">
      <AdminAside />

      <Form className="dashboardProductform" size="big">
        <FormField
          type="text"
          control={Input}
          placeholder="Product"
          onChange={(e) => {
            setAddproduct(e.target.value);
          }}
        />
        <FormField
          type="text"
          control={Input}
          placeholder="Price"
          onChange={(e) => {
            setAddproduct(e.target.value);
          }}
        />
        <FormField
          type="text"
          control={Input}
          placeholder="Description"
          onChange={(e) => {
            setAddproduct(e.target.value);
          }}
        />
        <FormField
          type="text"
          control={Input}
          placeholder="Category"
          onChange={(e) => {
            setAddproduct(e.target.value);
          }}
        />
        <FormField
          control={Input}
          type="file"
          onChange={(e) => {
            setImgData(e.target.files[0]);
          }}
        />
        {message && (
          <Message positive>
            <MessageHeader>{message}</MessageHeader>
          </Message>
        )}
        <Button
          onClick={() => {
            handleAddPost();
          }}
          loading={loading}
        >
          Add
        </Button>
      </Form>
    </div>
  );
}

export default AddProduct;
