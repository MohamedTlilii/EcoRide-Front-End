import "./Style.css";
import React from "react";
// import { Button } from "react-bootstrap";

import { CardContent } from "semantic-ui-react";
// import { url } from "../../utils/url";
// import { useFetch } from "../../utils/useFetch";
// import ProfileItem from "../../Components/ProfileItem";
import {
  CardMeta,
  CardHeader,
  CardDescription,
  Card,
  Icon,
  Image,
  ButtonGroup,
  Button,
  ModalHeader,
  ModalContent,
  ModalActions,
  Form,
  Modal,
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "semantic-ui-react";
import Footer from "../../Components/Footer/Footer";

function Profile() {
  // let token = localStorage.getItem("token");
  // let { data } = useFetch(url, token);

  // Check if data is undefined before using map
  return (
    <div >
      <div className="dashboard">
      <div className="profile-container">
      <Card className="profil-container-user">
        <Image src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg" />
        <CardContent>
          <CardHeader></CardHeader>
          <CardMeta>
            <span className="date">Added on: </span>
          </CardMeta>
          <CardDescription>
            {" "}
            <Icon name="map marker alternate" />
          </CardDescription>
          <CardDescription>
            {" "}
            <Icon name="mail" />
          </CardDescription>
        </CardContent>
        <CardContent extra>
          <Icon name="phone" />
        </CardContent>
        <ButtonGroup>
          <Button>Edit</Button>
          {/* <Button>Delete</Button> */}
        </ButtonGroup>
      </Card>
      {/* EDIT CONTACT MODAL */}
      <Modal>
        <ModalHeader>Update contact</ModalHeader>
        <ModalContent>
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                type="text"
                placeholder="Contact name"
                name="contactName"
              />
              <Form.Input type="phone" placeholder="Phone" name="phone" />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input type="email" placeholder="Email" name="email" />
              <Form.Input type="text" placeholder="Adress" name="address" />
            </Form.Group>
          </Form>
        </ModalContent>
        <ModalActions>
          <Button>Cancel</Button>
          <Button />
        </ModalActions>
      </Modal>
      {/* EDIT CONTACT PHOTO MODAL */}
      <Modal>
        <ModalHeader>Update contact photo</ModalHeader>
        <ModalContent>
          <Form>
            <Form.Group widths="equal">
              <Form.Input />
            </Form.Group>
          </Form>
        </ModalContent>
        <ModalActions>
          <Button>Cancel</Button>
          <Button />
        </ModalActions>
      </Modal>
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
