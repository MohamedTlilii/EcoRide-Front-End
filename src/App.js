import "./App.css";

import { Routes, Route } from "react-router-dom";
import PublicLayout from "./Layouts/PublicLayout";
// import Home from "./Pgaes/Home";
import ElectricScooters from "./Pgaes/ElectricScooters";
import Accessories from "./Pgaes/Accessories";
import About from "./Pgaes/About";
import Contact from "./Pgaes/Contact";
import Products from "./Pgaes/Products";
import ConnexionLayout from "./Layouts/ConnexionLayout";
import Login from "./Pgaes/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="/products" element={<Products />} />
        <Route path="/electricscooters" element={<ElectricScooters />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="/" element={<ConnexionLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
