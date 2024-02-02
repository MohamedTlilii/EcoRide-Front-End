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
import Footer from "../../Components/Footer/Footer";
import { useFetch } from "../../utils/useFetch";
import { PacmanLoader } from "react-spinners";
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
  const [creatOrder, setCreatOrder] = useState({});
  const handleUpdateUser = () => {
    setLoading(true);
    axios
      .put(`${url}/updateInformation`, newUserData, {
        headers: { token },
      })

      .then((res) => {
        setLoading(false);
        console.log(res);
        toast.success("User information updated successfully", {
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
        console.log(res);
        toast.success("Profile picture updated successfully", {
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
        setLoadingP(false);
        console.dir(err);
        setOpen(false);
      });
  };

  const products = useFetch(
    "https://ecoridebackend.onrender.com/api/user/getOwnOrder",
    token
  );
  // console.log(products.data && products.data);
  const handleCreatOrder = () => {
    setLoading(true);
    axios
      .post(`${url}/createOrder`, creatOrder, {
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
  return (
    <div>
      <div className="profilDashboard">
        <div className="profile-container">
          {!data ? (
            <PacmanLoader color="#36d7b7" size={100} />
          ) : (
            data && (
              <Card className="profil-container-user">
                <Image src={data.imageUrl} />

                <CardContent>
                  <CardHeader></CardHeader>
                  <CardMeta>
                    <span className="date"> {data.userName} </span>
                  </CardMeta>
                  <CardDescription>
                    <Icon name="map marker alternate" />
                    {data.address}
                  </CardDescription>
                  <CardDescription>
                    {" "}
                    <Icon name="mail" />
                    {data.email}
                  </CardDescription>
                </CardContent>
                <CardContent extra>
                  <Icon name="phone" />
                  {data.number}
                </CardContent>
                <ButtonGroup>
                  <Button
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    Edit
                  </Button>
                </ButtonGroup>
              </Card>
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
                backgroundColor: "hsl(173, 95%, 42%)",
                
              }}
            >
              <TableHeader>
                <TableRow>
                  <TableHeaderCell
                    style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
                  >
                    Product ID
                  </TableHeaderCell>
                  <TableHeaderCell
                    style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
                  >
                    Product
                  </TableHeaderCell>
                  <TableHeaderCell
                    style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
                  >
                    Price
                  </TableHeaderCell>
                  <TableHeaderCell
                    style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
                  >
                    Quantity
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
                    Createdat{" "}
                  </TableHeaderCell>

                  <TableHeaderCell
                    style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
                  >
                    Totall
                  </TableHeaderCell>
                </TableRow>
              </TableHeader>

              <TableBody>
                {!data ? (
                  // Loading indicator (PacmanLoader)
                  <PacmanLoader color="#36d7b7" size={100} />
                ) : (
                  data && (
                    // Render products data
                    <>
                      {products.data &&
                        products.data.map((product) =>
                          product.cart.map((cartItem) => (
                            <TableRow key={cartItem.productId._id}>
                              <TableCell>{cartItem.productId._id}</TableCell>
                              <TableCell>{cartItem.productId.title}</TableCell>
                              <TableCell textAlign="right">
                                {cartItem.productId.price}TND
                              </TableCell>
                              <TableCell textAlign="right">
                                {cartItem.quantity}
                              </TableCell>
                              <TableCell textAlign="right">
                                {/* {product.data.map((order) => (
                                  <React.Fragment key={order._id}>
                                    <TableRow>
                                      <TableCell>
                                        Total: {order.total}
                                      </TableCell>
                                    </TableRow>

                                    <TableRow>
                                      <TableCell>
                                        Is Delivered:{" "}
                                        {order.isDelivered ? "Yes" : "No"}
                                      </TableCell>
                                    </TableRow>

                                    <TableRow>
                                      <TableCell>
                                        Is Confirmed:{" "}
                                        {order.isConfirmed ? "Yes" : "No"}
                                      </TableCell>
                                    </TableRow>

                                    <TableRow>
                                      <TableCell>
                                        Created At: {order.createdAt}
                                      </TableCell>
                                    </TableRow>
                                  </React.Fragment>
                                ))} */}
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                    </>
                  )
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <div>
        <div className="footer">
          <Footer />
          <div className="last-footer">
            <p>Copyright © 2023 EcoRide | Powered by EcoRide</p>
            <img
              src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/payment-icons.png"
              style={{ width: "246px", height: "20px" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
