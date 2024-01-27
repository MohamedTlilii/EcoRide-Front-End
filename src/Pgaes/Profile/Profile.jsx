import "./Style.css";
import React from "react";
// import { Button } from "react-bootstrap";

import { CardContent } from "semantic-ui-react";
 import { url } from "../../utils/url";
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
import { useFetchUser } from "../../utils/useFetchUser";

function Profile() {
   let token = localStorage.getItem("token");
   let { data,error } = useFetchUser(url, token);


  return (
    <div >
      <div className="dashboard">
      <div className="profile-container">
     { data&& <Card className="profil-container-user">
        <Image src={data.imageUrl} />
        <CardContent>
          <CardHeader></CardHeader>
          <CardMeta>
            <span className="date"> User :{data.userName} </span>
          </CardMeta>
          <CardDescription>
         
            <Icon name="map marker alternate"  />
            {data.email}
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
         
        </ButtonGroup>
      </Card>}
     
    
      
      
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
