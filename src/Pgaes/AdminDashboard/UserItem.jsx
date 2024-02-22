import React from "react";
import {
  CardHeader,
  CardContent,
  Button,
  Card,
  CardMeta,
  CardDescription,
} from "semantic-ui-react";
import { adminUrl } from "../../utils/url";
import axios from "axios";
import { Image } from "antd";

function UserItem({
  createdAt,
  imageUrl,
  userName,
  address,
  city,
  firstName,
  lastName,
  number,
  email,
  isBanned,
  _id,
}) {
  let token = localStorage.getItem("token");
  const handleBanUser = () => {
    axios
      .put(
        `${adminUrl}/banUser/${_id}`,
        {},
        {
          headers: { token },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.dir(err);
      });
  };
  const handleUnbanUser = () => {
    axios
      .put(
        `${adminUrl}/unbanUser/${_id}`,
        {},
        {
          headers: { token },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.dir(err);
      });
  };
  return (
    <div className="userCardSolo">
      <Card className="userItemContainer">
        <CardContent>
          <Image
            width={220}
            height={220}
            src={imageUrl}
            style={{
              // width: "220px",
              // height: "220px",
              borderRadius: "100%",
              position: "relative",
              left: "25px",
              top: "5px",
            }}
          />
        </CardContent>
        <CardContent>
          <CardHeader>
            {" "}
            <h2>{userName}</h2>
          </CardHeader>
          <br />
          <CardMeta>
            <h4 style={{ color: "black" }}>
              Name :{firstName} {lastName}
            </h4>
          </CardMeta>
          <CardMeta>
            <h4 style={{ color: "black" }}>Number: {number}</h4>
          </CardMeta>
          <br />

          <CardMeta>
            <h4 style={{ color: "black" }}>Email:{email}</h4>
          </CardMeta>
          <CardMeta>
            <h4 style={{ color: "black" }}>
              Address :{address}
              {city}
            </h4>
          </CardMeta>
        </CardContent>
        <CardContent extra>
          {" "}
          <h4> Date :{createdAt}</h4>
          <div className="ui two buttons">
            {isBanned ? (
              <Button
                basic
                color="green"
                onClick={() => {
                  handleUnbanUser();
                }}
              >
                Unban
              </Button>
            ) : (
              <Button
                basic
                color="red"
                onClick={() => {
                  handleBanUser();
                }}
              >
                Ban
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
      {/* <Card className="userItemContainer">
        <Image
          style={{ width: "90px", height: "90px" }}
          floated="right"
          size="mini"
          src={imageUrl}
        />
        <CardHeader> User: {userName}</CardHeader>
        <CardContent>
          <CardMeta>
            Address:
            {address}
            {city}
          </CardMeta>
          <CardDescription>Email:{email}</CardDescription>
          <CardMeta>
            {" "}
            Name:
            {firstName} {lastName}
          </CardMeta>

          <CardMeta>Number: {number}</CardMeta>
        </CardContent>
        <CardContent extra>
          {" "}
          Date :{createdAt}
          <div className="ui two buttons">
            {isBanned ? (
              <Button
                basic
                color="green"
                onClick={() => {
                  handleUnbanUser();
                }}
              >
                Unban
              </Button>
            ) : (
              <Button
                basic
                color="red"
                onClick={() => {
                  handleBanUser();
                }}
              >
                Ban
              </Button>
            )}
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
}

export default UserItem;
