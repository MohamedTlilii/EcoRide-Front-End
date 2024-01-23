import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar/NavBar";
// import Footer from "../Components/Footer/Footer";
function PublicLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      {/* <Footer/> */}
    </div>
  );
}

export default PublicLayout;
