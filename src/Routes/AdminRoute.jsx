import React from "react";
import { Navigate } from "react-router-dom";
function AdminRoute({ children }) {
  let token = localStorage.getItem("token");
  let isAdmin = localStorage.getItem("isAdmin");
  let isUser = localStorage.getItem("isUser");

  if (token && isAdmin === "true" && isUser === "false") {
    return <> {children} </>;
  } else {
    return <Navigate to="/login" />;
  }
}

export default AdminRoute;
