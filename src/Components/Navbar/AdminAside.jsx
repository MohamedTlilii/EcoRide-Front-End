import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import AdminProfil from "../../Pgaes/AdminDashboard/AdminProfil";
function AdminAside() {
  return (
    <div className="admin-aside">
      <Link style={{ color: "black" }} className="aside-link" to="/users">
        Users
      </Link>
      <Link style={{ color: "black" }} className="aside-link" to="/orders">
        Orders
      </Link>
      <Link style={{ color: "black" }} className="aside-link" to="/addProduct">
        Porduct
      </Link>
      <div > 
        <AdminProfil/>
      </div>
    </div>
  );
}

export default AdminAside;
