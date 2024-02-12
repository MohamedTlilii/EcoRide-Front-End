import React from "react";
import AdminAside from "../../Components/Navbar/AdminAside";
import { useFetch } from "../../utils/useFetch";
import { CardGroup } from "semantic-ui-react";
import { adminUrl } from "../../utils/url";
import UserItem from "./UserItem";

function Users() {
  let token = localStorage.getItem("token");
  const { data, } = useFetch(`${adminUrl}/getUsers`, token);
  return (
    <div className="dashboard">
      <AdminAside />
      <CardGroup>
        {data?.map((user, i) => (
          <UserItem key={i} {...user} />
        ))}
      </CardGroup>
    </div>
  );
}

export default Users;
