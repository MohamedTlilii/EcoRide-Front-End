import React from "react";
import {
  CardHeader,
  CardContent,
  Button,
  Card,
  Image,
  CardMeta,
  CardDescription,
} from "semantic-ui-react";
import { adminUrl } from "../../utils/url";
import axios from "axios";
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
      <Image
        style={{ width: "90px", height: "90px" }}
        floated="right"
        size="mini"
        src={imageUrl}
      />
      <CardHeader> User: {userName}</CardHeader>
      <CardContent>
        <CardMeta>Address:
          {address}
          {city}
        </CardMeta>
        <CardDescription>Email:{email}</CardDescription>
        <CardMeta>
          {" "}Name:
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
    </Card>
    </div>
  );
}

export default UserItem;
