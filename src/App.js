import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Inventory from "./components/Inventory";
import NewInventory from "./components/NewInventory";
import PrescriptionList from "./components/Prescriptions";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wraps the routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="inventory/new" element={<NewInventory />} />
          <Route path="prescriptions" element={<PrescriptionList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
