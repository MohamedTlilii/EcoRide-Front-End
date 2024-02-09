import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
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
    </div>
  );
}

export default AdminAside;
