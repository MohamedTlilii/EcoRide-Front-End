import { Routes, Route } from "react-router-dom";
import PublicLayout from "./Layouts/PublicLayout";
import LandingPage from "./Pgaes/Home/LandingPage";
import ProductsSolo from "./Pgaes/Home/ProductsSolo";
import ElectricScooters from "./Pgaes/ElectricScooters/ElectricScooters";
import Accessories from "./Pgaes/Accessories/Accessories";
import About from "./Pgaes/About/About";
import Contact from "./Pgaes/Contact/Contact";
import ConnexionLayout from "./Layouts/ConnexionLayout";
import Login from "./Pgaes/LoginRegister/Login";
import Data from "./Data";
import DataScoooters from "./DataScoooters";
import ElectricScootersSoloProduct from "./Pgaes/ElectricScooters/ElectricScootersSoloProduct";
import DataAccessories from "./DataAccessories";
import AccessoriesSoloProduct from "./Pgaes/Accessories/AccessoriesSoloProduct";
import "@splidejs/react-splide/css";
import Register from "./Pgaes/LoginRegister/Register";
import Profile from "./Pgaes/Profile/Profile";
// import UserRoute from "./Routes/UserRoute";
import AdminDashboard from "./Pgaes/Admin/AdminDashboard";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
// import AdminRoute from "./Routes/AdminRoute";
// import AdminLogin from "./Pages/AdminLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route
          index
          element={
            // <PrivateRoute>
              <LandingPage products={Data} />
            // </PrivateRoute>
          }
        />

        <Route
          path="/product/:id"
          element={
            <PrivateRoute>
              <ProductsSolo products={Data} />
            </PrivateRoute>
          }
        />

        <Route
          path="electricscooters"
          element={
            // <PrivateRoute>
            <ElectricScooters products={DataScoooters} />
            // </PrivateRoute>
          }
        />
        <Route
          path="productscooter/:id"
          element={
            // <PrivateRoute>
            <ElectricScootersSoloProduct products={DataScoooters} />
            // </PrivateRoute>
          }
        />
        <Route
          path="accessories"
          element={
            // <PrivateRoute>
            <Accessories products={DataAccessories} />
            // </PrivateRoute>
          }
        />
        <Route
          path="accessories/:id"
          element={
            <PrivateRoute>
              <AccessoriesSoloProduct products={DataAccessories} />
            </PrivateRoute>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="Dashboard" element={<AdminDashboard />} />
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
