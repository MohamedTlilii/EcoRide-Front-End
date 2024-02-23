import "./Style.css";
import React, { useState } from "react";
import axios from "axios";
import { adminUrl, url } from "../../utils/url";
import { CardContent, Form } from "semantic-ui-react";
import {
  CardMeta,
  CardDescription,
  Card,
  Icon,
  Image,
  ButtonGroup,
  Button,
  ModalHeader,
  ModalContent,
  ModalActions,
  Modal,
} from "semantic-ui-react";
import { useFetch } from "../../utils/useFetch";
import { PacmanLoader, RingLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";

function AdminProfil() {
  let token = localStorage.getItem("token");
  const { data } = useFetch(
    "https://ecoridebackend.onrender.com/api/user/GetInformation",
    token
  );
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingP, setLoadingP] = useState(false);
  const [newAdminData, setNewAdminData] = useState({});
  const [updateAdminPic, setUpdateAdminPic] = useState();

  const handleUpdateAdmin = () => {
    setLoading(true);
    axios
      .put(`${adminUrl}/updateInformation`, newAdminData, {
        headers: { token },
      })
      .then((res) => {
        setLoading(false);
        console.log(res);
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
    let adminData = new FormData();
    adminData.append("photo", updateAdminPic);
    axios
      .put(`${url}/updatePhoto`, adminData, {
        headers: { token },
      })
      .then((res) => {
        setLoadingP(false);
        console.log(res);
        setOpen(false);
      })
      .catch((err) => {
        setLoading(false);
        console.dir(err);
        setOpen(false);
      });
  };

  return (
    <div className="admin-profile">
      {!data ? (
        <RingLoader
          color="#36d7b7"
          size={100}
          style={{ position: "relative", left: "120px", top: "150px" }}
        />
      ) : (
        
        <Card>
          <Image src={data.imageUrl} />
          <CardContent>
            <CardMeta>
              <span className="date">{data.userName}</span>
            </CardMeta>
            <CardDescription>
              <Icon name="mail" />
              {data.email}
            </CardDescription>
            <CardMeta>
              Createdate : <span> {data.createdAt.substring(0, 10)} </span>
              {data.createdAt.substring(11, data.createdAt.length - 8)}
            </CardMeta>
          </CardContent>
          <ButtonGroup>
            <Button onClick={() => setOpen(true)}>Edit</Button>
          </ButtonGroup>
        </Card>
      )}
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
                  onChange={(e) => setUpdateAdminPic(e.target.files[0])}
                />
                <Button onClick={handleUpdatePhoto} loading={loadingP}>
                  Update photo
                </Button>
              </label>
            </Form.Group>
            <Form.Group
              widths="equal"
              onChange={(e) =>
                setNewAdminData({
                  ...newAdminData,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <Form.Input type="text" placeholder="UserName" name="userName" />
              <Form.Input type="tel" placeholder="Phone" name="number" />
            </Form.Group>
            <Form.Group
              widths="equal"
              onChange={(e) =>
                setNewAdminData({
                  ...newAdminData,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <Form.Input type="email" placeholder="Email" name="email" />
              <Form.Input type="text" placeholder="Address" name="address" />
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
            onClick={handleUpdateAdmin}
          >
            Update
          </Button>
        </ModalActions>
      </Modal>
    </div>
  );
}

export default AdminProfil;
