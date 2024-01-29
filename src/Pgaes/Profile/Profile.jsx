import "./Style.css";
import React, { useEffect } from "react";
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

function Profile() {
  let token = localStorage.getItem("token");
  const { data, error } = useFetch(
    "https://ecoridebackend.onrender.com/api/user/GetInformation",
    token
  );
  const [open, setOpen] = React.useState(false);

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
                  <Button onClick={() => {}}>Save</Button>
                </ButtonGroup>
              </Card>
            )
          )}
          <>
            {/* edit contact photo and information */}
            <Modal
              style={{
                width: "50%",
                height: "37%",
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
                  <Form.Group widths="equal">
                    <Form.Input
                      style={{ height: "50px" }}
                      type="file"
                      name="photo"
                      onChange={(e) => {}}
                    />
                  </Form.Group>
                  <Form.Group onChange={(e) => {}} widths="equal">
                    <Form.Input
                      type="text"
                      placeholder="UserName"
                      name="UserName"
                    />
                    <Form.Input
                      type="phone"
                      placeholder="Phone"
                      name="phone"
                    />
                  </Form.Group>
                  <Form.Group widths="equal" onChange={(e) => {}}>
                    <Form.Input
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
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
                  onClick={() => setOpen(false)}
                  positive
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
      <div className="aaa">
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
