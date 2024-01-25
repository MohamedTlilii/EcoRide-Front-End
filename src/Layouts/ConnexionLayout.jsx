import React from "react";
import { Outlet } from "react-router-dom";
import NavBarLogin from "../Components/Navbar/NavBarLogin";

function ConnexionLayout() {
  return (
    <div>
      <NavBarLogin/>
      <Outlet />
    </div>
  );
}

export default ConnexionLayout;
