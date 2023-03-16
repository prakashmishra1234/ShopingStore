import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../component/Cart.js";
import Details from "../component/Details";
import Home from "../component/Home";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Navigation;
