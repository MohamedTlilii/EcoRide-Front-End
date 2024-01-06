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

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LandingPage products={Data} />} />

        <Route path="/product/:id" element={<ProductsSolo products={Data} />} />

        <Route
          path="electricscooters"
          element={<ElectricScooters products={DataScoooters} />}
        />
        <Route
          path="productscooter/:id"
          element={<ElectricScootersSoloProduct products={DataScoooters} />}
        />
        <Route
          path="accessories"
          element={<Accessories products={DataAccessories} />}
        />
        <Route
          path="accessories/:id"
          element={<AccessoriesSoloProduct products={DataAccessories} />}
        />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="/" element={<ConnexionLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
