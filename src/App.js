import "./App.css";

import { Routes, Route } from "react-router-dom";
import PublicLayout from "./Layouts/PublicLayout";
// import Home from "./Pgaes/Home";
import ElectricScooters from "./Pgaes/ElectricScooters";
import Accessories from "./Pgaes/Accessories";
import About from "./Pgaes/About";
import Contact from "./Pgaes/Contact";
import ConnexionLayout from "./Layouts/ConnexionLayout";
import Login from "./Pgaes/Login";
import Register from "./Pgaes/Register";
import LandingPage from "./Pgaes/LandingPage";
import ProductsSolo from "./Pgaes/ProductsSolo";
import Data from "./Data";


function App() {
  return (
    <Routes >
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LandingPage products={Data} />} />
        <Route path="/product/:id" element={<ProductsSolo products={Data} />} />

        <Route path="electricscooters" element={<ElectricScooters />} />
        <Route path="accessories" element={<Accessories />} />
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
