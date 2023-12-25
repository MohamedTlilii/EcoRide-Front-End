import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
function PublicLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default PublicLayout;
