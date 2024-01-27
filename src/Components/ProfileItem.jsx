import React, { useState } from "react";
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
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
} from "semantic-ui-react";
// import Swal from "sweetalert2";
// import axios from "axios";
// import { url } from "../utils/url";
function ProfileItem({
  firstName,
  lastName,
  userName,
  email,
  address,
  city,
  phone,
  number,
  imageUrl,
  _id,
  createdAt,
}) {
//   let token = localStorage.getItem("token");

  return (
    <>
      <Card >
        <div>
          <Icon name="picture" size="large" color="orange" />
        </div>
        <Image  />
        <CardContent>
          <CardHeader >
           
          </CardHeader>
          <CardMeta>
            <span className="date">Added on: </span>
          </CardMeta>
          <CardDescription >
            {" "}
            <Icon name="map marker alternate" /> {address}
          </CardDescription>
          <CardDescription>
            {" "}
            <Icon name="mail" /> {email}
          </CardDescription>
        </CardContent>
        <CardContent extra>
          <Icon name="phone" />
          {phone}
        </CardContent>
        <ButtonGroup>
          <Button>Edit</Button>
          <Button>Delete</Button>
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
    </>
  );
}

export default ProfileItem;
