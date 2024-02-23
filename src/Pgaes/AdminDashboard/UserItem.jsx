import React from "react";
import {
  CardHeader,
  CardContent,
  Button,
  Card,
  CardMeta,
  CardDescription,
  Icon,
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
              objectFit: "cover",
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
              {firstName} {lastName}
            </h4>
          </CardMeta>
          <CardMeta>
            <Icon name="phone" style={{ color: "black" }} />
            <span style={{ color: "black" }}> {number}</span>
          </CardMeta>

          <CardMeta>
            <Icon name="map marker alternate" style={{ color: "black" }} />
            <span style={{ color: "black" }}>
              {address} <span></span>
              {city}
            </span>
          </CardMeta>
          <CardMeta>
            <Icon name="mail" style={{ color: "black" }} />
            <span style={{ color: "black" }}>Email : {email}</span>
          </CardMeta>
        </CardContent>
        <CardContent extra>
          <h5 style={{ color: "black" }}>
            Createdate: {createdAt.substring(0, 10)} at{" "}
            {createdAt.substring(11, createdAt.length - 8)}
          </h5>
          <div className="ui two buttons">
            {isBanned ? (
              <button
                className="ui button unban"
                style={{ borderRadius: "50px" }}
                onClick={handleUnbanUser}
              >
                Unban
              </button>
            ) : (
              <button
                style={{ borderRadius: "50px" }}
                className="ui button ban"
                onClick={handleBanUser}
              >
                Ban
              </button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserItem;
