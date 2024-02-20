import "./Style.css";
import React, { useState } from "react";
import axios from "axios";
import { url } from "../../utils/url";
import { CardContent, Form } from "semantic-ui-react";
import {
  CardMeta,
  CardHeader,
  CardDescription,
  Card,
  Icon,
  Image,
  ButtonGroup,
  Button,
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  ModalHeader,
  ModalContent,
  ModalActions,
  Modal,
} from "semantic-ui-react";

import { useFetch } from "../../utils/useFetch";
import { PacmanLoader } from "react-spinners";
import CartDetails from "./CartDetails";
import { toast } from "react-toastify";

function Profile() {
  let token = localStorage.getItem("token");
  const { data } = useFetch(
    "https://ecoridebackend.onrender.com/api/user/GetInformation",
    token
  );

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingP, setLoadingP] = useState(false);
  const [newUserData, setNewUserData] = useState({});
  const [updateUserPic, setUpdateUserPic] = useState();
  const [open2, setOpen2] = useState(false);
  const handleUpdateUser = () => {
    setLoading(true);
    axios
      .put(`${url}/updateInformation`, newUserData, {
        headers: { token },
      })

      .then((res) => {
        setLoading(false);
        toast.success("User informations was updated successfully", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setOpen(false);
      })
      .catch((err) => {
        setLoading(false);
        console.dir(err);
        setOpen(false);
      });
  };
  const handleUpdatePhoto = () => {
    setLoadingP(true);
    let userData = new FormData();
    userData.append("photo", updateUserPic);
    axios
      .put(`${url}/updatePhoto`, userData, {
        headers: { token },
      })
      .then((res) => {
        setLoadingP(false);

        toast.success("Profile Picture was updated successfully", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setOpen(false);
      })
      .catch((err) => {
        setLoading(false);
        console.dir(err);
        setOpen(false);
      });
  };

  const products = useFetch(
    "https://ecoridebackend.onrender.com/api/user/getOwnOrder",
    token
  );

  return (
    <div>
      <div className="profil">
        <div className="profile-container">
          {!data ? (
            <PacmanLoader color="#36d7b7" size={60} />
          ) : (
            data && (
              <div className="profil-container-user">
                <img
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "148px",
                    position: "relative",
                    left: "390px",
                    bottom: "100px",
                  }}
                  src={data.imageUrl}
                  alt=""
                />

                <div>
                  <h1
                    className="date"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "59px",
                      fontFamily: "monospace",
                      // border: "1px solid black",
                      position: "relative",
                      
                      bottom: "90px",
                    }}
                  >
                    {data.userName}{" "}
                  </h1>
                  <span
                    style={{
                      fontSize: "30px",
                      position: "relative",
                      left: "248px",
                      bottom: "90px",
                      fontFamily: "monospace",
                    }}
                  >
                    {data.firstName}
                  </span>
                  <span
                    style={{
                      fontSize: "30px",
                      position: "relative",
                      left: "258px",
                      bottom: "90px",
                      fontFamily: "monospace",
                    }}
                  >
                    {data.lastName}
                  </span>
                  <h3
                    style={{
                      fontSize: "20px",
                      position: "relative",
                      left: "245px",
                      bottom: "90px",
                      fontFamily: "monospace",
                    }}
                  >
                    <Icon name="map marker alternate" />
                    {data.address}
                    {data.city}
                  </h3>
                  <h3
                    style={{
                      fontSize: "20px",
                      position: "relative",
                      left: "245px",
                      bottom: "90px",
                      fontFamily: "monospace",
                    }}
                  >
                    <Icon name="mail" />
                    {data.email}
                  </h3>
                  <span
                    style={{
                      fontSize: "20px",
                      position: "relative",
                      left: "243px",
                      bottom: "77px",
                      fontFamily: "monospace",
                    }}
                  >
                    <Icon name="phone" />
                    {data.number}
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      position: "relative",
                      right: "70px",
                      top: "90px",
                      fontFamily: "monospace",
                    }}
                  >
                    Createdate :{" "}
                    <span> {data.createdAt.substring(0, 10)} </span>
                    {data.createdAt.substring(11, data.createdAt.length - 8)}
                  </span>
                </div>

                <Button
                  style={{
                    fontSize: "20px",
                    position: "relative",
                    left: "435px",
                    top: "20px",
                    fontFamily: "monospace",
                    borderRadius: "148px",
                    backgroundColor: "hsl(173, 95%, 42%)",
                    color: "white",
                  }}
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Edit
                </Button>
              </div>
            )
          )}
          <>
            {/* edit user modal */}
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
              <ModalHeader>Update Information</ModalHeader>
              <ModalContent>
                <Form>
                  <Form.Group>
                    <label>
                      <input
                        style={{ width: "927px", height: "50px" }}
                        type="file"
                        name="photo"
                        onChange={(e) => {
                          setUpdateUserPic(e.target.files[0]);
                        }}
                      />
                      <Button
                        onClick={() => {
                          handleUpdatePhoto();
                        }}
                        loading={loadingP}
                      >
                        Update photo
                      </Button>
                    </label>
                  </Form.Group>
                  <Form.Group
                    widths="equal"
                    onChange={(e) => {
                      setNewUserData({
                        ...newUserData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  >
                    <Form.Input
                      type="text"
                      placeholder="UserName"
                      name="userName"
                    />
                    <Form.Input type="tel" placeholder="Phone" name="number" />
                  </Form.Group>
                  <Form.Group
                    widths="equal"
                    onChange={(e) => {
                      setNewUserData({
                        ...newUserData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  >
                    <Form.Input type="email" placeholder="Email" name="email" />
                    <Form.Input
                      type="text"
                      placeholder="Address"
                      name="address"
                    />
                  </Form.Group>
                </Form>
              </ModalContent>
              <ModalActions>
                <Button color="black" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button
                  style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
                  type="button"
                  positive
                  loading={loading}
                  onClick={() => {
                    handleUpdateUser();
                  }}
                >
                  Update
                </Button>
              </ModalActions>
            </Modal>
          </>
          {/* products card */}
          <div>
            <Table
              style={{
                position: "relative",
                top: "200px",
                right: "150px",
                width: "1330px",
              }}
              // style={{
              //   backgroundColor: "hsl(173, 95%, 42%)",
              // }}
            >
              <TableHeader>
                <TableRow>
                  <TableHeaderCell
                    style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
                  >
                    Order ID
                  </TableHeaderCell>
                  <TableHeaderCell
                    style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
                  >
                    Products
                  </TableHeaderCell>
                  <TableHeaderCell
                    style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
                  >
                    IsConfirmed{" "}
                  </TableHeaderCell>
                  <TableHeaderCell
                    style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
                  >
                    IsDelivered{" "}
                  </TableHeaderCell>
                  <TableHeaderCell
                    style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
                  >
                    Createdate{" "}
                  </TableHeaderCell>

                  <TableHeaderCell
                    style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
                  >
                    Totall
                  </TableHeaderCell>
                </TableRow>
              </TableHeader>

              <TableBody>
                {products.data &&
                  products.data.map((product) => (
                    <TableRow>
                      <TableCell>{product._id}</TableCell>
                      <TableCell
                        onClick={() => {
                          setOpen2(true);
                        }}
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                      >
                        See Details
                      </TableCell>
                      <CartDetails
                        data={product.cart}
                        setOpen2={setOpen2}
                        open2={open2}
                      />
                      <TableCell>
                        {product.isConfirmed ? "Yes" : "No"}
                      </TableCell>
                      <TableCell>
                        {product.isDelevered ? "Yes" : "No"}
                      </TableCell>
                      <TableCell>
                        {product.createdAt.substring(0, 10)},{" "}
                        {product.createdAt.substring(
                          11,
                          product.createdAt.length - 8
                        )}
                      </TableCell>
                      <TableCell>{product.total} DT</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      /> */}
    </div>
  );
}

export default Profile;
