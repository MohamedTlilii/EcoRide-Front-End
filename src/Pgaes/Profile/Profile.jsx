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

function Profile(_id) {
  let token = localStorage.getItem("token");
  const { data, error } = useFetch(
    "https://ecoridebackend.onrender.com/api/user/GetInformation",
    token
  );
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newUserData, setNewUserData] = useState({});
  const handleUpdateUser = () => {
    setLoading(true);
    axios
      .put(`${url}/updateInformation/${_id}`, newUserData, {
        headers: { token },
      })
      .then((res) => {
        setLoading(false);
        setOpen(false);
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);

        console.dir(err);
      });
  };
  return (
    <div>
      <div className="dashboard">
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
                height: "31%",
                position: "absolute",
                left: "500px",
                top: "300px",
              }}
              onClose={() => setOpen(false)}
              open={open}
            >
              <ModalHeader>Update Information</ModalHeader>
              <ModalContent>
                <Form
                  onChange={(e) => {
                    setNewUserData({
                      ...newUserData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                >
                  <Form.Group>
                    <label>
                      <input
                        style={{ width: "927px", height: "40px" }}
                        type="file"
                        name="photo"
                      />
                    </label>
                  </Form.Group>
                  <Form.Group onChange={(e) => {}} widths="equal">
                    <Form.Input
                      type="text"
                      placeholder="UserName"
                      name="UserName"
                    />
                    <Form.Input type="phone" placeholder="Phone" name="phone" />
                  </Form.Group>
                  <Form.Group widths="equal" onChange={(e) => {}}>
                    <Form.Input type="email" placeholder="Email" name="email" />
                    <Form.Input
                      type="text"
                      placeholder="Adress"
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
                  content="Update"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={() => {
                    handleUpdateUser();
                  }}
                  positive
                  loading={loading}
                />
              </ModalActions>
            </Modal>
          </>
          {/* products card */}
          <div>
            <Table celled inverted selectable>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                  <TableHeaderCell>Notes</TableHeaderCell>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow>
                  <TableCell>clio</TableCell>
                  <TableCell>Approved</TableCell>
                  <TableCell textAlign="right">None</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>x200</TableCell>
                  <TableCell>Approved</TableCell>
                  <TableCell textAlign="right">Requires call</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>bmw</TableCell>
                  <TableCell>Denied</TableCell>
                  <TableCell textAlign="right">None</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <div >
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
