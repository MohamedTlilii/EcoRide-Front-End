import AdminAside from "../../Components/Navbar/AdminAside";
// import AdminData from "./AdminData";
// lol
import AdminProfil from "./AdminProfil";
// import AdminProfil from "../AdminDashboard/AdminProfil";
import "./Style.css";

function AdminDashboard() {
  return (
    <div className="dashboard">
      <AdminAside />
      <AdminProfil />
    </div>
  );
}

export default AdminDashboard;
