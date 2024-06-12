import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDescription from "../components/ProductOverview";
import PartsSelection from "../components/PartsSelection";
import Assembly from "../components/AssemblyArea";
import FinalProduct from "../components/FinalProductDisplay";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductDescription />} />
      <Route path="/parts-selection" element={<PartsSelection />} />
      <Route path="/assembly" element={<Assembly />} />
      <Route path="/final-product" element={<FinalProduct />} />
    </Routes>
  );
};

export default AllRoutes;
