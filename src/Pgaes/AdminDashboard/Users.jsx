import React from "react";
import { RingLoader } from "react-spinners"; // Import RingLoader
import AdminAside from "../../Components/Navbar/AdminAside";
import { useFetch } from "../../utils/useFetch";
import { CardGroup } from "semantic-ui-react";
import { adminUrl } from "../../utils/url";
import UserItem from "./UserItem";

function Users() {
  let token = localStorage.getItem("token");
  const { data } = useFetch(`${adminUrl}/getUsers`, token);
  return (
    <div className="dashboard">
      <AdminAside />
      {!data ? (
        <RingLoader
          color="#36d7b7"
          size={100}
          style={{ position: "relative", left: "720px", top: "300px" }}
        />
      ) : (
        <CardGroup>
          {data?.map((user, i) => (
            <UserItem key={i} {...user} />
          ))}
        </CardGroup>
      )}
    </div>
  );
}

export default Users;
