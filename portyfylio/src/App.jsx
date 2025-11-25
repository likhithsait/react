
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";    
import HealthPal from "./components/HealthPal";
import CarDamage from "./components/CarDamage";

import Navbar from "./components/Navbar";

function App() {
  return (
        <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/healthpal" element={<HealthPal />} />
      <Route path="/cardamage" element={<CarDamage />} />
    </Routes>
    </>
  );
  
}

export default App;
