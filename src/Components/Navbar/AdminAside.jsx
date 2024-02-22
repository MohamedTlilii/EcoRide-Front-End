import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import AdminProfil from "../../Pgaes/AdminDashboard/AdminProfil";
function AdminAside() {
  return (
    <div className="admin-aside">
      <div style={{ position: "sticky", top: "100px" }}>
        {/* <h1>Admin Profile</h1> */}
        {/* <AdminProfil /> */}
        <br />
        <br />
        <Link
          style={{
            color: "hsl(173, 95%, 42%)",
            fontFamily: "Menlo, sans-serif",
          }}
          className="aside-link"
          to="/users"
        >
          Users
        </Link>
        <br />
        <br />
        <Link
          style={{
            color: "hsl(173, 95%, 42%)",
            fontFamily: "Menlo, sans-serif",
          }}
          className="aside-link"
          to="/orders"
        >
          Orders
        </Link>
        <br />
        <br />
        <Link
          style={{
            color: "hsl(173, 95%, 42%)",
            fontFamily: "Menlo, sans-serif",
          }}
          className="aside-link"
          to="/addProduct"
        >
          Porduct
        </Link>
      </div>
    </div>
  );
}

export default AdminAside;
