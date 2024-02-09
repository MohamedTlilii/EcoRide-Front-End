import { Routes, Route } from "react-router-dom";
import PublicLayout from "./Layouts/PublicLayout";
import LandingPage from "./Pgaes/Home/LandingPage";
import ProductsSolo from "./Pgaes/Home/ProductsSolo";
import "@splidejs/react-splide/css";
import ElectricScooters from "./Pgaes/ElectricScooters/ElectricScooters";
// import ElectricScootersSoloProduct from "./Pgaes/ElectricScooters/ElectricScootersSoloProduct";
import Accessories from "./Pgaes/Accessories/Accessories";
// import AccessoriesSoloProduct from "./Pgaes/Accessories/AccessoriesSoloProduct";
import About from "./Pgaes/About/About";
import Contact from "./Pgaes/Contact/Contact";
import ConnexionLayout from "./Layouts/ConnexionLayout";
import Login from "./Pgaes/LoginRegister/Login";
import Register from "./Pgaes/LoginRegister/Register";
import Profile from "./Pgaes/Profile/Profile";
import AdminDashboard from "./Pgaes/AdminDashboard/AdminDashboard";
import PublicRoute from "./Routes/PublicRoute";
import AdminRoute from "./Routes/AdminRoute";
import UserRoute from "./Routes/UserRoute";
import Users from "./Pgaes/Users";
import Orders from "./Pgaes/Orders";
import AddProduct from "./Pgaes/AddProduct";
// import AdminProfil from "./Pgaes/AdminProfil";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LandingPage />} />

        <Route path="/product/:id" element={<ProductsSolo />} />

        <Route path="electricscooters" element={<ElectricScooters />} />
        {/* <Route
          path="productscooter/:id"
          element={<ElectricScootersSoloProduct />}
        /> */}
        <Route path="accessories" element={<Accessories />} />
        {/* <Route path="accessories/:id" element={<AccessoriesSoloProduct />} /> */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="profile"
          element={
            <UserRoute>
              <Profile />
            </UserRoute>
          }
        />
        <Route
          path="dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="users"
          element={
            <AdminRoute>
              <Users />
            </AdminRoute>
          }
        />
        <Route
          path="orders"
          element={
            <AdminRoute>
              <Orders />
            </AdminRoute>
          }
        />
        <Route
          path="addProduct"
          element={
            <AdminRoute>
              <AddProduct />
            </AdminRoute>
          }
        />
      </Route>
      <Route path="/" element={<ConnexionLayout />}>
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
