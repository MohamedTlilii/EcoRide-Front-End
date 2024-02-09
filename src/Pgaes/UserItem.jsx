import React from "react";
import {
  CardHeader,
  CardContent,
  Button,
  Card,
  Image,
} from "semantic-ui-react";
import { adminUrl } from "../utils/url";
import axios from "axios";
function UserItem({ createdAt, imageUrl, userName, isBanned, _id }) {
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
    <Card className="userItemContainer">
      <CardContent>
        <Image floated="right" size="mini" src={imageUrl} />
        <CardHeader> UserName :{userName}</CardHeader>
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
  );
}

export default UserItem;
