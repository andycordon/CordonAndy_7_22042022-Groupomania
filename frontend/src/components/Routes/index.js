import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Profil from "../../pages/Profil";
import Navbar from "../Navbar";

const index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profil />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Home replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
