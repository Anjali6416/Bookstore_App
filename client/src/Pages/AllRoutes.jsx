import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import BookDetails from "./Book_Details/Book_Details";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book-details/:id" element={<BookDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default AllRoutes;
