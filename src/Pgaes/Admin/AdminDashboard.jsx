import React from "react";
import Profile from "../Profile/Profile";
// import Footer from "../../Components/Footer/Footer";
// import NavBar from "../../Components/Navbar/NavBar";
// import AddPostForm from "../components/AddPostForm";
// import UsersList from "../components/UsersList";

import "./Style.css";
// import LandingPageFooter from "../../Components/Footer/Footer";
import Footer from "../../Components/Footer/Footer";
function AdminDashboard() {
  return (
    <div >
      <div className="dashboard">
        <Profile />
      </div>
      <div className="aaa">
      <div className="footer">
        <Footer />
        <div className="last-footer">
          <p>Copyright © 2023 EcoRide | Powered by EcoRide</p>
          <img
            src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/payment-icons.png"
            style={{ width: "246px", height: "20px" }}
            alt=""
          />
        </div>
      </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
